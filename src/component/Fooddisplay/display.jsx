import React, { useContext } from "react";
import "./display.css";
import { StoreContext } from "../contextstore/storedata";
import { food_list } from "../../Images/data";
import FoodList from "../Foodlist/foodlist";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className="display" style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <h2>TOP DISHES NEAR YOU</h2>
            <div className="display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodList
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    }

                })}
            </div>
        </div>
    )
};

export default FoodDisplay;



