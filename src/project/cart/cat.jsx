
import { useContext, useState } from "react";
import Navbar from "../../Navbar/navbar";
import "./cart.css";
import { data } from "../../Images/data";
import { StoreContext } from "../../component/contextstore/storedata";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cart, removeTocart, food_list, getTotal } = useContext(StoreContext);

    // const navigate = useNavigate();
    const [login, setLogin] = useState(false);

    const isCartEmpty = Object.keys(cart).every((key) => cart[key] === 0);

    return (
        <div className="cart">
            <br />
            <br />

            {/* <Navbar setLogin={setLogin}/> */}
            {isCartEmpty ? (
                <div className="empty-cart">
                    <img src={data.Empty_icon} alt="Empty Cart" />

                </div>
            ) : (
                <div className="cart-container">
                    <table style={{ width: "100%" }} className="cart-table">
                        <tr>
                            <th>Items</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                        <hr style={{ width: "500%" }} />
                        <br />
                        {food_list.map((item, index) => {
                            if (cart[item._id] > 0) {
                                return (
                                    <>
                                        <tr className="" key={item._id} >
                                            <div className="image-container">
                                            <img src={item.image} alt="" className="cart-image" />
                                            </div>
                                            <td>{item.name}</td>
                                            <td>₹{item.price}</td>
                                            <td>{cart[item._id]}</td>
                                            <td>₹{item.price * cart[item._id]}</td>
                                            <td onClick={() => removeTocart(item._id)} className="cross"><a style={{textDecoration:"none"}} href="#">X</a></td>
                                        </tr>
                                        <br />
                                    </>
                                );
                            }
                        })}

                    </table>
                    <div className="cart-bottom">
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
                    <button >
                        {getTotal() ? (
                            <Link to="/order" style={{ textDecoration: "none", color: "white" }}>PROCEED TO CHECKOUT</Link>
                        ) : (
                            'PROCEED TO CHECKOUT'
                        )}
                    </button>
                </div>
                <div className="cart-promocode">
                    <h2>If you have a promo code, Enter it here</h2>
                    <div className="cart-input">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
                </div>
            )}
            
        </div>
    );
};

export default CartPage;
