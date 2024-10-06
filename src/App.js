import "./index.css";
import './App.css';
import HomePage from "./project/Home/home";
import CartPage from "./project/cart/cat";
import PlaceOrder from "./project/order/order";
import Navbar from './Navbar/navbar';
import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUpForm from "./component/LoginFrom/signup";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./component/Footer/footer";
import LoginForm from "./component/LoginFrom/login";
import SignUpFrom from "./component/LoginFrom/signup";
import ProtectedRoute from "./project/protectedroutes/protected";
import ErrorMessage from "./project/ErrorMassage/error";
import CheckoutForm from "./project/payment/CheckoutForm";
import PaymentSuccess from "./project/payment/paymentSucess";
import { Elements } from '@stripe/react-stripe-js';  // Import Elements
import { loadStripe } from '@stripe/stripe-js';  // Import loadStripe
import CustomNavbar from "./Navbar/navbar";
import SearchBar from "./project/payment/search/search";
const pk_key = "pk_test_51Pw4zqCfbvsxLfXUYaYUE1T13ce7o2UalPaLgExpXls9B1NQW13NrYoKyxUdbxOQ8bzKJJQ2f7AHPDDNaNFRGXQf00GQDkdqAV"
const stripePromise = loadStripe(pk_key)
function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [check, setCheck] = useState(true)
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken')
  };
  const handlecheck = () => {
    setCheck(!check)
  }
  return (
    <>
      <BrowserRouter>

        {!isLoggedIn ? (

          check ? (<LoginForm setIsLoggedIn={setIsLoggedIn} setCheck={handlecheck} />) : (<SignUpForm setCheck={handlecheck} />)


        ) : (
          <>
            <CustomNavbar onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage /></ProtectedRoute>} />
              <Route path="/cart" element={<ProtectedRoute isLoggedIn={isLoggedIn}><CartPage /></ProtectedRoute>} />
              <Route path="/order" element={<ProtectedRoute isLoggedIn={isLoggedIn}><PlaceOrder /></ProtectedRoute>} />
              <Route path="/checkout" element={<Elements stripe={stripePromise}> <CheckoutForm /></Elements>} />
              <Route path="/success" element={<ProtectedRoute isLoggedIn={isLoggedIn}><PaymentSuccess /></ProtectedRoute>} />
              

              <Route path="*" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ErrorMessage /></ProtectedRoute>} />
              {/* <Route path="/login" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Profile /></ProtectedRoute>} />
            <Route path="banner" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Banner /></ProtectedRoute>} />
            <Route path="leads" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Leads /></ProtectedRoute>} /> */}
            </Routes>
          </>

        )}


      </BrowserRouter>
      
      
      
      <Footer />
    </>




  );
}

export default App;
