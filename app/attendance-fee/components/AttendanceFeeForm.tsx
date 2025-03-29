'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { type Appearance } from '@stripe/stripe-js';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';

// Initialize Stripe outside of component to prevent multiple instances
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, {
  // Only include stripeAccount if you're using Stripe Connect
  ...(process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID ? {
    stripeAccount: process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID
  } : {})
});

// Define Stripe appearance configuration
const appearance: Appearance = {
  theme: 'night',
  variables: {
    colorPrimary: '#00E6CA',
    colorBackground: '#1a1a1a',
    colorText: '#ffffff',
    colorDanger: '#ff4444',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSizeBase: '16px',
    fontWeightNormal: '400',
    fontWeightMedium: '500',
    fontWeightBold: '600',
    fontLineHeight: '1.5',
    fontSmooth: 'antialiased',
    spacingUnit: '4px',
    borderRadius: '8px',
  },
  rules: {
    '.Input': {
      border: '1px solid #374151',
      boxShadow: 'none',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      fontSmoothing: 'antialiased',
    },
    '.Input:focus': {
      border: '1px solid #00E6CA',
      boxShadow: '0 0 0 1px #00E6CA',
    },
    '.Label': {
      fontSize: '14px',
      color: '#9CA3AF',
      fontFamily: 'inherit',
      fontSmoothing: 'antialiased',
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/attendance-fee/success`,
        },
      });

      if (error) {
        setPaymentError(error.message || 'An error occurred with your payment.');
        setIsProcessing(false);
      } else {
        setPaymentSuccess(true);
      }
    } catch (err) {
      setPaymentError('An unexpected error occurred.');
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
        <p>Thank you for your payment. You will receive a confirmation email shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement 
        options={{
          layout: 'tabs'
        }}
      />
      
      {paymentError && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
          {paymentError}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-[#00E6CA] text-black font-semibold py-4 px-6 rounded-lg 
                 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-all duration-200"
      >
        {isProcessing ? 'Processing...' : 'Pay $120.00'}
      </button>

      <div className="text-center text-sm text-gray-400 mt-4">
        <p>Secure payment powered by Stripe</p>
      </div>
    </form>
  );
};

const StripePaymentForm = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [elementsKey, setElementsKey] = useState<number>(0);

  useEffect(() => {
    const initializePayment = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: 12000 }), // Amount in cents
        });
        
        if (!response.ok) {
          throw new Error('Failed to create payment intent');
        }
        
        const data = await response.json();
        if (!data.clientSecret) {
          throw new Error('No client secret received');
        }

        setClientSecret(data.clientSecret);
        // Increment key to force Elements remount with new clientSecret
        setElementsKey(prev => prev + 1);
      } catch (error) {
        console.error('Payment initialization error:', error);
        setError(error instanceof Error ? error.message : 'Failed to initialize payment');
      } finally {
        setIsLoading(false);
      }
    };

    initializePayment();
  }, []);

  if (error) {
    return (
      <div className="relative">
        <div className="absolute inset-0">
          <BackgroundSparkles useFixed={false} zIndex={5} />
        </div>
        <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800">
          <div className="text-center text-red-500">
            <h2 className="text-xl font-semibold mb-4">Payment Error</h2>
            <p className="text-gray-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-[#00E6CA] text-black font-semibold py-2 px-4 rounded-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || !clientSecret) {
    return (
      <div className="relative">
        <div className="absolute inset-0">
          <BackgroundSparkles useFixed={false} zIndex={5} />
        </div>
        <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#00E6CA]"></div>
          </div>
        </div>
      </div>
    );
  }

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <BackgroundSparkles useFixed={false} zIndex={5} />
      </div>
      
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Payment Details</h2>
            <span className="text-2xl font-bold text-[#00E6CA]">$120.00</span>
          </div>
          <p className="text-gray-400 text-sm">
            Please complete the payment form below to process your attendance fee.
          </p>
        </div>

        <Elements key={elementsKey} stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
};

export default StripePaymentForm; 