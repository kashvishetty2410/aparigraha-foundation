// Razorpay integration service
interface RazorpayBaseOptions {
  key: string;
  name: string;
  description: string;
  image?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color: string;
  };
  subscription_id?: string;
  recurring?: boolean;
}

interface RazorpayPaymentOptions extends RazorpayBaseOptions {
  amount: number;
  currency: string;
  handler: (response: RazorpayResponse) => void;
}

interface RazorpaySubscriptionOptions extends RazorpayBaseOptions {
  subscription_id: string;
  handler: (response: RazorpaySubscriptionResponse) => void;
}

type RazorpayOptions = RazorpayPaymentOptions | RazorpaySubscriptionOptions;

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpaySubscriptionResponse {
  razorpay_payment_id?: string;
  razorpay_subscription_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}

declare global {
  interface Window {
    Razorpay: RazorpayConstructor;
  }
}

class RazorpayService {
  private keyId: string;

  constructor(keyId: string) {
    this.keyId = keyId;
  }

  loadScript(): Promise<boolean> {
    return new Promise((resolve) => {
      // Check if script is already loaded
      if (typeof window.Razorpay !== 'undefined') {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async initializePayment(options: Omit<RazorpayPaymentOptions, 'key'>): Promise<RazorpayResponse | null> {
    const isScriptLoaded = await this.loadScript();
    if (!isScriptLoaded) {
      console.error('Failed to load Razorpay SDK');
      return null;
    }

    return new Promise((resolve) => {
      const rzp = new window.Razorpay({
        key: this.keyId,
        ...options,
      } as RazorpayPaymentOptions);

      rzp.open();
    });
  }

  async initializeSubscription(options: Omit<RazorpaySubscriptionOptions, 'key'>): Promise<RazorpaySubscriptionResponse | null> {
    const isScriptLoaded = await this.loadScript();
    if (!isScriptLoaded) {
      console.error('Failed to load Razorpay SDK');
      return null;
    }

    return new Promise((resolve) => {
      const rzp = new window.Razorpay({
        key: this.keyId,
        ...options,
      } as RazorpaySubscriptionOptions);

      rzp.open();
    });
  }

  // In a real implementation, this would call your backend API to create a subscription
  // For demonstration purposes, we're simulating this
  async createSubscriptionPlan(amount: number, currency: string = "INR"): Promise<string> {
    // This would normally be an API call to your backend which would then call Razorpay's API
    // For demo purposes, we'll return a mock subscription ID
    return `sub_${Date.now()}`;
  }
}

// Export a singleton instance
// Note: In a real app, you should get this key from environment variables
export const razorpayService = new RazorpayService(import.meta.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder');