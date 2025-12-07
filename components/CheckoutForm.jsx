import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
      setProcessing(false);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you would send paymentMethod.id to your backend
      // await axios.post('/create-payment-intent', ...)
      
      setTimeout(() => {
        toast.success("Payment Successful! Application Submitted.");
        setProcessing(false);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border p-4 rounded-md mb-4">
        <CardElement
            options={{
            style: {
                base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
                },
                invalid: {
                color: '#9e2146',
                },
            },
            }}
        />
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button 
        type="submit" 
        disabled={!stripe || processing} 
        className="btn btn-primary w-full"
      >
        {processing ? <span className="loading loading-spinner"></span> : "Pay $40"}
      </button>
    </form>
  );
};

export default CheckoutForm;