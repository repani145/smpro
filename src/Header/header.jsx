import React from "react";
import "./header.css"
import ScreenSize from "../component/scrrensize/scrrensize";
const Header=()=>{

    const screen_size=ScreenSize()
    return(
        <div className="header">
            <div className="header-cont">
              {screen_size<=715?
              
              screen_size<=500 ?
              
              <p style={{fontSize:"14px"}}>Order your favourite food here</p>:<p style={{fontSize:"18px"}}>Order your favourite food here</p>
              
              
              
              :<h1 className="display-4">Order your favourite food here</h1>
              
            
            }
            
              
              <p>Food is mainly composed of water, lipids, proteins, and carbohydrates. Minerals and organic substances can also be found in food. Plants, algae, and some microorganisms use photosynthesis to make some of their own nutrients.</p>
              <button>View Menu</button>
            </div>

        </div>
    )
}
export default Header;