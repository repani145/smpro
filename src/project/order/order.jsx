import { useContext, useState } from "react";
import Navbar from "../../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import "./order.css"
import { StoreContext } from "../../component/contextstore/storedata";
const PlaceOrder = () => {
   const { getTotal } = useContext(StoreContext)
   const [login, setLogin] = useState(false)
   const navigate = useNavigate();


   const handleProceedToPayment = () => {
      navigate("/checkout", { state: { totalAmount: getTotal() } });
    };


   return (
      <div>

         {/* <Navbar setLogin={setLogin} /> */}

         <form className="order">


            <div className="order-left">
               <p className="title">Delivery Information</p>
               <div className="multi-fields">
                  <input type="text" placeholder="Frist Name" />
                  <input type="text" placeholder="Last Name" />

               </div>
               <input type="email" placeholder="Email address" />
               <input type="text" placeholder="Street" />
               <div className="multi-fields">
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="State" />
               </div>
               <div className="multi-fields">
                  <input type="text" placeholder="Zip code" />
                  <input type="text" placeholder="Country" />

               </div>
               <input type="text" placeholder="phone" />
            </div>

            <div className="order-right">
               <div className="cart-total">
                  <h2>Cart Total</h2>
                  <div>
                     <div className="cart-details">
                        <p>Subtotal</p>
                        <p>₹ {getTotal()}</p>

                     </div>
                     <hr />
                     <div className="cart-details">
                        <p>Delivery Fee</p>
                        <p>₹ {getTotal() === 0 ? 0 : 50}</p>

                     </div>
                     <hr />
                     <div className="cart-details">
                        <b>Total</b>
                        <b>₹ {getTotal() === 0 ? 0 : getTotal() + 50}</b>
                     </div>

                  </div>
                  <button type="button" onClick={handleProceedToPayment}>
              PROCEED TO PAYMENT
            </button>
               </div>
            </div>

         </form>
      </div>
   )
}
export default PlaceOrder;      