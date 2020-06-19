import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
function Navbar() {
    return (
        <div>
           <ul>
               <li><Link to="/home">Home</Link></li>
               <li><Link  to="/about" >About Us</Link></li>
               <li><Link  to="/contact Us" >Contact Us</Link ></li>
               <li><Link to="/services" >Services</Link></li>
               <li><Link  to="/rooms">Rooms</Link ></li>
               
           </ul>
        </div>
    )
}

export default Navbar
