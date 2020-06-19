import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import room1 from "./images/room1.jpg";
import room2 from "./images/room2.jpg";
import room3 from "./images/room3.jpg";
import './main/main.css';

 
const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <AliceCarousel mouseTrackingEnabled>
            <img src={room1} onDragStart={handleOnDragStart} className="yours-custom-class" />
            <img src={room2} onDragStart={handleOnDragStart} className="yours-custom-class" />
            <img src={room3} onDragStart={handleOnDragStart} className="yours-custom-class" />
        </AliceCarousel>
    )
}

export default Gallery