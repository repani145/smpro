import { createContext, useEffect, useState } from "react";
import { food_list } from "../../Images/data";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cart, setCart] = useState({})
    const [aceesstoken,setAceestoken]=useState({})


    const addTocart = (itemId) => {
        if (!cart[itemId]) {
            setCart(prev => ({ ...prev, [itemId]: 1 }))
        } else {
            setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeTocart = (itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    // useEffect(()=>{
    //     console.log(cart)
    // },[cart])

    const getTotal = () => {
        let totalAmount = 0;
        for (const item in cart) {
            if (cart[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cart[item]
            }


        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cart,
        setCart,
        addTocart,
        removeTocart,
        getTotal,
        setAceestoken,
        aceesstoken
    }
    return (
        <div>
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
        </div>
    )
}

export default StoreContextProvider;