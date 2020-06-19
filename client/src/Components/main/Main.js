import React, { Component } from 'react';
import "./main.css";
import Gallery from "../Gallery"
import room8 from "../images/room8.jpg";
import room9 from "../images/room9.jpg";
import room7 from "../images/room7.jpg";
import men1 from "../images/men1.jpg";
import men2 from "../images/men2.jpg";
import women1 from "../images/women1.jpg";
import pool1 from "../images/pool1.jpg";
import Rest1 from "../images/Rest1.jpg";
import carpack1 from "../images/carpack1.jpg";
import nightclub from "../images/nightclub.jpg";
import dish1 from "../images/dish1.jpg";
import dish2 from "../images/dish2.jpg";
import dish3 from "../images/dish3.jpg";
import dish4 from "../images/dish4.jpg";


import room4 from "../images/room4.jpg";



export default class Main extends Component {
    render() {
        return (
            <>
                <div className="main-container">
                    <div className="main">
                        <div className="heading">
                            <h1>WELCOME T0 LOVTECH LUXURY  HOTEL</h1>
                        </div>

                        <div className="description">
                            <p>Moderne Rooms and Speciuos Suites</p>
                            <p>A Gourmet Dinning Experience</p>
                            <p>Family Rooms $400 Per Night</p>
                        </div>
                        <div className="main-bottom">
                            <div className="shot-bar">
                                <div className="shot-bar-info">
                                    <span>ENJOY FREE WIFI</span>
                                    <p>IN THE WHOLE HOTEL</p>
                                </div>
                                <div className="shot-bar-info">
                                    <span>CABLE TELEVISION </span>
                                    <p>FREE CABLE TV</p>
                                </div>
                                <div className="shot-bar-info">
                                    <span>RESTAURANT</span>
                                    <p>RESTAURANT $ BAR</p>
                                </div>
                            </div>
                            <div className="side-bar-container">
                                <div className="side-bar">
                                    <form>
                                        <p>BOOK YOUR STAY</p>
                                        <label for="Check In / Out">Check in / out</label> <br />
                                        <input type="check in / out" id="check in " name="check in" /> <br />
                                        <label for="Guest">Guest 1</label> <br />
                                        <input type="check in / out" id="check in " name="check in" />
                                        <p>Check Availlability</p>
                                    </form>
                                </div>

                            </div>

                        </div>



                    </div>


                </div>


                <div className="images-Gallery">

                    <div className="images">

                        <img src={room8} alt="room1" />
                    </div>
                    <div className="images" >
                        <img src={room9} alt="room2" />
                    </div>
                    <div className="images" >
                        <img src={room7} alt="room2" />
                    </div>

                </div>
                <div className="guest-container">
                    <div>
                        <p className="one">OUR GUESTS LOVE US</p>

                    </div>

                    <div className="client-info">
                        <div className="client">
                            <span>Nice Place</span>
                            <p>Fantastic location in a historic renovated monastery in the heart of the Castro.<br /> Staff were helpful and knowledgeable and everything in easy walking distance.</p>
                            <img src={men1} alt="men1" />
                            <p>MARTHINS</p>
                        </div>
                        <div className="client">
                            <span>Perfect</span>
                            <p>The owner and staff were extremely helpful and kind and took time to ensure<br /> that we had extra information on things to do in the area and places to visit.</p>
                            <img src={women1} alt="women1" />
                            <p>LOIS</p>
                        </div>

                        <div className="client" >
                            <span>Good Choice</span>
                            <p>
                                Extremely nice environment, the room was great, the service was awesome,<br /> really helpful and great service I'll visit them again in the near future</p>
                            <img src={men2} alt="men2" />
                            <p>ROMEO</p >
                        </div>
                    </div>

                    <div className="services-container">
                        <div>
                            RESTAURANT
                                <img src={Rest1} alt="Rest1" />
                        </div>
                        <div>
                            NIGHT CLUB
                                <img src={nightclub} alt="night" />
                        </div>
                        <div>
                            SWIMMING POOL
                                <img src={pool1} alt="pool1" />
                        </div>
                        <div>
                            CAR PACK
                                <img src={carpack1} alt="carpacck1" />
                        </div>
                    </div>

                    <div className="slide-container">
                        <div>
                            <p>We assure you of top class diet of best nutrition and hygien which is our priority ranging from Africa, Europe and the world ,we will assure you a happy stay and we hope to see you again thanks</p>
                        </div>
                    </div>

                </div>
              

                <div className="gallery-container">
                   
                    <div className="gallery">
                        <div>
                            <img src={dish1} />
                        </div>
                        <div >
                            <img src={dish2} />
                        </div>
                        <div>
                            <img src={dish3} />
                        </div>
                        <div>
                            <img src={dish4} />
                        </div>
                        <div>
                            <img src={dish1} />
                        </div>
                        <div >
                            <img src={dish2} />
                        </div>
                        <div>
                            <img src={dish3} />
                        </div>
                        <div>
                            <img src={dish4} />
                        </div>

                    </div>


                </div>
            </>
        )
    }
}
