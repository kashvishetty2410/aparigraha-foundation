const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const Razorpay = require('razorpay');
const { sendEmail } = require('./email-service');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'your_key_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'your_key_secret',
});

// Razorpay webhook secret
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || 'your_webhook_secret';

// --- Endpoints ---

// Create Order (for one-time payments)
app.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR' } = req.body;
    
    const options = {
      amount: amount * 100, // amount in the smallest currency unit (paise)
      currency,
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send('Error creating order');
  }
});

// Create Subscription (for recurring payments)
app.post('/create-subscription', async (req, res) => {
  try {
    const { amount, currency = 'INR', period = 'monthly', customerName } = req.body;

    // 1. Create a Plan (if dynamic, or use a fixed plan ID if you have pre-created plans)
    // For simplicity, we'll create a plan dynamically or assume one exists. 
    // Creating plans dynamically for every user is not recommended for production scale if plans are identical.
    // Better strategy: Hash the plan details and check if plan exists, or just use a standard plan ID.
    // Here we will create a plan for demonstration.
    
    const planResponse = await razorpay.plans.create({
      period,
      interval: 1,
      item: {
        name: `Donation Plan - ${amount} ${currency}`,
        amount: amount * 100,
        currency,
        description: `Monthly donation of ${amount} ${currency}`,
      },
    });

    // 2. Create Subscription
    const subscription = await razorpay.subscriptions.create({
      plan_id: planResponse.id,
      customer_notify: 1,
      total_count: 120, // 10 years or indefinite
      quantity: 1,
      addons: [],
      notes: {
        customer_name: customerName
      }
    });

    res.json({
      subscription_id: subscription.id,
      plan_id: planResponse.id
    });
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).send('Error creating subscription');
  }
});

// Contact Form Endpoint
app.post('/send-contact', async (req, res) => {
  const { name, email, message, phone } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Send email to help@aparigrahafoundation.com
    await sendEmail(
      'help@aparigrahafoundation.com',
      `New Contact Message from ${name}`,
      `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      `
    );

    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error handling contact form:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Webhook handling
app.post('/webhook/razorpay', async (req, res) => {
  // Verify webhook signature
  const signature = req.headers['x-razorpay-signature'];
  const body = JSON.stringify(req.body);
  
  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    console.log('Invalid signature');
    return res.status(400).send('Invalid signature');
  }
  
  const event = req.body.event;
  const payload = req.body.payload;
  
  console.log('Received event:', event);

  try {
    switch (event) {
      case 'payment.captured': {
        const payment = payload.payment.entity;
        const email = payment.email;
        const amount = payment.amount / 100;
        
        console.log(`Payment captured for ${email}: ${amount}`);
        
        // 1. Send Receipt to Donor
        if (email) {
          await sendEmail(
            email,
            'Thank you for your donation!',
            `<h1>Thank You!</h1><p>We received your donation of INR ${amount}. Your support means a lot to Aparigraha Foundation.</p>`
          );
        }
        
        // 2. Send Notification to Organization (donation@...)
        await sendEmail(
          'donation@aparigrahafoundation.com',
          `New Donation: INR ${amount}`,
          `
          <h3>New Donation Received</h3>
          <p><strong>Amount:</strong> INR ${amount}</p>
          <p><strong>Donor Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Payment ID:</strong> ${payment.id}</p>
          `
        );
        break;
      }
        
      case 'subscription.created': {
        // Just created, maybe not charged yet
        break;
      }

      case 'subscription.charged': {
        const payment = payload.payment.entity;
        const email = payment.email;
        const amount = payment.amount / 100;

        console.log(`Subscription charged for ${email}: ${amount}`);

        if (email) {
            await sendEmail(
                email,
                'Monthly Donation Confirmation',
                `<h1>Thank You!</h1><p>We successfully processed your monthly donation of INR ${amount}.</p>`
            );
        }
        
         // 2. Send Notification to Organization (donation@...)
        await sendEmail(
          'donation@aparigrahafoundation.com',
          `New Subscription Payment: INR ${amount}`,
          `
          <h3>New Recurring Donation Received</h3>
          <p><strong>Amount:</strong> INR ${amount}</p>
          <p><strong>Donor Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Payment ID:</strong> ${payment.id}</p>
          `
        );
        break;
      }
      
      default:
        // console.log('Unhandled event:', event);
    }
  } catch (err) {
    console.error("Error processing webhook event:", err);
  }
  
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
