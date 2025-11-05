// Example Node.js server for handling Razorpay webhooks
// This is for demonstration purposes only

const express = require('express');
const crypto = require('crypto');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Razorpay webhook secret (should be stored in environment variables)
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || 'your_webhook_secret_here';

// Webhook endpoint to receive payment notifications
app.post('/webhook/razorpay', (req, res) => {
  // Verify webhook signature
  const signature = req.headers['x-razorpay-signature'];
  const body = JSON.stringify(req.body);
  
  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  
  // Check if signature is valid
  if (signature !== expectedSignature) {
    console.log('Invalid signature');
    return res.status(400).send('Invalid signature');
  }
  
  // Process the webhook event
  const event = req.body.event;
  const payload = req.body.payload;
  
  switch (event) {
    case 'payment.captured':
      // Payment was successful
      console.log('Payment captured:', payload.payment.entity.id);
      // Update database, send confirmation email, etc.
      break;
      
    case 'payment.failed':
      // Payment failed
      console.log('Payment failed:', payload.payment.entity.id);
      // Notify user, log failure, etc.
      break;
      
    case 'subscription.created':
      // Subscription was created
      console.log('Subscription created:', payload.subscription.entity.id);
      // Update database with subscription details
      break;
      
    case 'subscription.charged':
      // Subscription payment was successful
      console.log('Subscription charged:', payload.subscription.entity.id);
      // Extend subscription period, send receipt, etc.
      break;
      
    case 'subscription.cancelled':
      // Subscription was cancelled
      console.log('Subscription cancelled:', payload.subscription.entity.id);
      // Update subscription status, send notification, etc.
      break;
      
    default:
      console.log('Unhandled event:', event);
  }
  
  // Acknowledge receipt of webhook
  res.status(200).send('OK');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;