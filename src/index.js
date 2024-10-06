import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreContextProvider from './component/contextstore/storedata';


import { BrowserRouter as Router } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AppProvider } from "./Components/context/Context";


// Replace with your actual Stripe public key
const stripePromise = loadStripe(
  "pk_test_51PxBb908YgRZafEKJRCt6mIjzAdRLeVUmhv9vTmGuIRVTJGNd7bvIjnbf4Zz3yaICAi4Zv1Igwk8jgSp2AEZwznT00nCkDZ6II"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
    <StoreContextProvider>
    <AppProvider>
      <App />
      </AppProvider>
    </StoreContextProvider>
    </Elements>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




root.render(
  <React.StrictMode>
    {/* <Router> */}
    <Elements stripe={stripePromise}>
      <AppProvider>
        <App />
      </AppProvider>
    </Elements>
    {/* </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
