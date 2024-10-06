import Header from "../../Header/header";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import "./home.css"
import FoodDisplay from "../../component/Fooddisplay/display";
import Download from "../../component/Appdowmload/dowmload";
import ImageScroll from "../../component/Menu/menu-2";
import SearchBar from "../payment/search/search";

const HomePage=({setLogin})=>{
    const [category,setCategory]=useState("All")
    // const [login,setLogin]=useState(false)
    return(
        <div>
             {/* <Navbar setLogin={setLogin}/> */}
        <Header/>
        {/* <Menu category={category} setCategory={setCategory}/> */}
        <ImageScroll category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Link to="/">{HomePage}</Link>
        <Download/>
        
        </div>
    )
}
export default HomePage;

// aaa menu ni endhu choosthunnav menu2 ki marchaam kadha
  // ippdu work aithunnay ledhu ok okka nimisham wait chey