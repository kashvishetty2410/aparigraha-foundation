# Aparigraha Foundation Project

## How can I contribute to this project?

### Steps to raise a Pull Request (PR)

1. Fork the repository
2. Clone your forked repository to your local machine
3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

   or

   ```bash
   git checkout -b bugfix/your-bugfix-name
   ```

4. Make your changes and commit them with a clear, descriptive commit message:

   ```bash
   git add .
   git commit -m "Add a brief description of your changes"
   ```

5. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Go to the original repository on GitHub and create a new Pull Request
7. Fill out the PR template with the necessary details about your changes
8. Submit your Pull Request for review

### PR Template

When creating a Pull Request, please use the provided template which includes:

- A description of the changes
- The type of change (bug fix, new feature, etc.)
- Testing information
- A checklist of items to ensure code quality

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

You can clone this repo and push changes. Pushed changes will be reflected in the repository.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Razorpay Integration

This project includes a complete donation system integrated with Razorpay for processing one-time and recurring payments.

### Features

- One-time donations
- Recurring donations (AutoPay)
- Secure payment processing
- Responsive donation modal
- Subscription management

### Frontend Components

- `src/components/DonationModal.tsx` - Main donation interface
- `src/lib/razorpay.ts` - Razorpay service integration
- Integrated into HeroSection, Navigation, and Footer components

### Backend (in `backend/` directory)

- Webhook handling for payment notifications
- Subscription management
- Security verification for webhook requests

### Setup

1. Create a Razorpay account at <https://razorpay.com>
2. Obtain your API keys from the Razorpay dashboard
3. Add your keys to the `.env` file:

   ```
   RAZORPAY_KEY_ID=your_key_id_here
   RAZORPAY_KEY_SECRET=your_key_secret_here
   ```

4. Configure webhooks in your Razorpay dashboard to point to your server endpoint

## How can I deploy this project?

You can build and deploy this project using the standard deployment process for Vite applications.
