import React from "react";
import "./download.css"
import { data } from "../../Images/data";
const Download=()=>{
    return(
        <div className="download" id="download">
            <p>For Better Experience Download <br/> Express Delivery App</p>
            <div className="app-download">
             <img src={data.play_store} alt="image"/>
             <img src={data.app_store} alt="image"/>
            </div>

        </div>
    )
}
export default Download;