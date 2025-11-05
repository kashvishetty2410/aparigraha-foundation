# Razorpay Integration for Aparigraha Foundation

This directory contains the backend components for handling Razorpay payments and subscriptions.

## Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set environment variables by creating a `.env` file in the project root (see the `.env` file in the project root for the required variables).

3. Start the server:

   ```bash
   npm start
   ```

## Webhook Handling

The server listens for the following Razorpay events:

- `payment.captured` - Successful one-time payments
- `payment.failed` - Failed one-time payments
- `subscription.created` - New recurring subscriptions
- `subscription.charged` - Successful recurring payments
- `subscription.cancelled` - Cancelled subscriptions

## Security

Webhook requests are verified using HMAC signatures to ensure they originate from Razorpay.

## API Endpoints

- `POST /webhook/razorpay` - Webhook endpoint for payment notifications
