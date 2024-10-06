import React, { useContext } from "react";
import "./foodlist.css";
import { data } from "../../Images/data";
import { StoreContext } from "../contextstore/storedata";
import ScreenSize from "../scrrensize/scrrensize";

const FoodList = ({ id, name, price, description, image }) => {
  const { cart, setCart, addTocart, removeTocart } = useContext(StoreContext);
  const screen_width = ScreenSize()

  return (

    <div className="container-2">
      <img src={image} alt="food" className="image" />
      <div className="title-rating">
        <p>{name}</p>
        <img src={data.rating_starts} alt="star-rating" />
      </div>
      <p className="food-desc">{description}</p>
      <div className="price-cart">
        <p className="food-price">₹ {price}</p>
        <div className="food-cart">

          {!cart[id] ? (
            <img
              onClick={() => addTocart(id)}
              src={data.add_icon_white}
              alt="add-icon"
              className="add"
            />
          ) : (
            <div className="counter">
              <img
                onClick={() => removeTocart(id)}
                src={data.remove_icon_red}
                alt="remove-icon"
              />
              <p>{cart[id]}</p>
              <img
                onClick={() => addTocart(id)}
                src={data.add_icon_green}
                alt="add-icon"
              />
            </div>
          )}
        </div>
      </div>

    </div>


  );
};

export default FoodList;
