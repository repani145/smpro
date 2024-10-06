// server.js
// require('dotenv').config();
const express = require('express');
const stripe = require('stripe')('sk_test_51PxBb908YgRZafEKv56vIVIAMm8CwLxzHDLvUTJrJi9Ll3K650CA2fD3OtG8wW49E1kLWKsQZvixthThEZFf1RMm00oWJqPTv8');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) =>{
  res.send("heloo iam server")
})

app.get("/", (req, res) =>{
    res.send("heloo iam server")
  })

// Route to create a Payment Intent
//       /api/payments/create-payment-intent
app.post('api/payments/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // The amount should be in cents (e.g., $10.00 = 1000 cents)

  try {
    // Create a PaymentIntent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Change the currency as needed
      payment_method_types: ['card'],
    });

    // Send the client secret to the client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

////////////////////////////////////////

// app.post('/api/payments/create-payment-intent', async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//     });

//     res.status(200).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(500).send({
//       error: error.message,
//     });
//   }
// });

// const PORT = 5002;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
