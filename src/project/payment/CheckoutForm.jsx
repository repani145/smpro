import React, { useEffect, useState ,useContext} from 'react';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import './payment.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from "../../component/contextstore/storedata";

const CheckoutForm = () => {

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const { getTotal } = useContext(StoreContext)
  const stripe = useStripe();
  const elements = useElements();

  const location=useLocation();  //
  const navigate = useNavigate();   //
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [amount, setAmount] = useState(''); // Add amount state
  const { setCart } = useContext(StoreContext);

  useEffect(() => {
    if (!location.state?.totalAmount) {
      setErrorMessage('No amount specified for payment.');
    }
  }, [location]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }
  
    setIsPaymentProcessing(true);
  
    // Get individual card elements
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);
  
    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      setErrorMessage('Card details are not provided.');
      setIsPaymentProcessing(false);
      return;
    }
  
    try {
      // Fetch the client secret from the backend
      // await fetch(`https://react-project-three-beta.vercel.app/api/payments/create-payment-intent`
      const response = await fetch('https://react-project-ebon-three.vercel.app/api/payments/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: getTotal()+50 *100 }), // Example amount in cents
      });
  
      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }
  
      const { clientSecret } = await response.json();
  
      if (!clientSecret) {
        throw new Error('Client secret not found');
      }
  
      // Confirm the payment with Stripe using the card elements
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,  // Only pass the reference to the card element here
          billing_details: {
            name: 'Customer Name', // Replace with actual customer name
            address: {
              postal_code: 43546, // Include postal code if you have it
            }
          },
        },
      });
  
      if (error) {
        setErrorMessage(error.message);
      } else if (paymentIntent.status === 'succeeded') {
          setSuccessMessage('Payment successful!');
          // alert('Payment Successful!');
          setCart({})

          // window.location.href = "/success";
          navigate("/success");
      }
    } catch (error) {
      setErrorMessage(error.message || 'An unexpected error occurred');
    }
  
    setIsPaymentProcessing(false);
  };
  
  return (
    <div className="payment-form">
      <h2>Complete Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={getTotal()+50}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <CardNumberElement id="cardNumber" className="StripeElement" />
        </div>
        <div className="form-group">
          <label htmlFor="cardExpiry">Expiration Date</label>
          <CardExpiryElement id="cardExpiry" className="StripeElement" />
        </div>
        <div className="form-group">
          <label htmlFor="cardCvc">CVC</label>
          <CardCvcElement id="cardCvc" className="StripeElement" />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="submit" className="payment-button" disabled={!stripe || isLoading}>
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
