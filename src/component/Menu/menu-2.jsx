import React, { useState } from 'react';
import './menu-2.css';
import { menu_list } from "../../Images/data";
import ScreenSize from '../scrrensize/scrrensize';
import { Prev } from "react-bootstrap/esm/PageItem";

const ImageScroll = ({category,setCategory}) => {
  const images = menu_list

  const imagesPerPage = Math.floor(ScreenSize() / 110);
  const [currentIndex, setCurrentIndex] = useState(0);

  const last_index = Math.ceil((menu_list.length - imagesPerPage) / 3)

  const scrollForward = () => {
    if (currentIndex + 1 >= images.length) {
      // If reaching the end, loop back to the beginning
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollBackward = () => {
    if (currentIndex - 1 < 0) {
      // If reaching the start, loop back to the end
      setCurrentIndex(images.length - imagesPerPage);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate the translateX value based on the current index
  const translateX = -(currentIndex * (100 / imagesPerPage)); // Adjust for smooth scrolling

  return (
    <div id="menu">

<h1 className='menu-title'>Explore our menu</h1>
<p className="menu-text">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential </p>
      <div className='pre-next-buttons'>
        {/* <h3>{Math.floor(ScreenSize()/110) }</h3> */}
        {currentIndex == 0 ?

          <button disabled>&#129144;</button>
          :
          <button onClick={scrollBackward}>&#129144;</button>
        }
        {/* {currentIndex==last_index?  <button disabled>Next</button>:  <button onClick={scrollForward}>Next</button>} */}
        <button onClick={scrollForward}>&#129146;</button>
      </div>
      <div className="image-scroll-container">
        <center>
          <div
            className="scroll-wrapper"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {images.map((image, index) => (
              <div  onClick={()=>setCategory(Prev===image.menu_name?"All":image.menu_name)} key={index} className='image-name'>
              <img key={index} src={image.menu_image} alt={`Image ${index}`} id="scroll-image" className={category===image.menu_name?"active":""} />
              <p>{image.menu_name}</p>
              </div>              
            ))}
          </div>
        </center>
      </div>
      {console.log(currentIndex, last_index, menu_list.length)}

    </div>
  );
};

export default ImageScroll;