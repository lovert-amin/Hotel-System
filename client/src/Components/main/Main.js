import React, { Component } from 'react';
import "./main.css";
import Gallery from "../Gallery"


export default class Main extends Component {
    render() {
        return (
           <> 
            <div className="main-container">
                <div className="main">
                    <h1>WELCOME T0 LOVTECH LUXURY  HOTEL</h1>
                    <div>
                        <p>Moderne Rooms and Speciuos Suites</p>
                        <p>A Gourmet Dinning Experience</p>
                        <p>Family Rooms $400 Per Night</p>
                    </div>
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
            </div>

            <p className="one">OUR GUESTS LOVE US</p>
            <div className="client-info">
                <div className="cleint">
                <span>Nice Place</span>
                <p>Fantastic location in a historic renovated monastery in the heart of the Castro.<br/> Staff were helpful and knowledgeable and everything in easy walking distance.</p>
                </div>
                <div className="cleint">
                    <span>Perfect</span>
                    <p>The owner and staff were extremely helpful and kind and took time to ensure<br/> that we had extra information on things to do in the area and places to visit.</p>
                </div>

                <div className="cleint" >
                    <span>Good Choice</span>
                    <p>
                    Extremely nice environment, the room was great, the service was awesome,<br/> really helpful and great service I'll visit them again in the near future</p>
                </div>
            </div>
            <Gallery/>
            </>
        )
    }
}
