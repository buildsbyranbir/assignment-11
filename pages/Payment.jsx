import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Px...'); // Replace with public key

const Payment = () => {
  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-xl shadow-xl mt-10">
      <h2 className="text-3xl text-center mb-8 font-bold">Complete Your Application</h2>
      <p className="mb-6 text-center text-gray-500">Total Amount: $40</p>
      
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;