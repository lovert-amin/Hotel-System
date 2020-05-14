import React, { Component } from 'react';
import "./footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <span>HOTEL LOVETECH</span>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className="footer">
                    <span>LATEST NEWS</span>
                    <p>Hotel Zante in pictures
                    10 Things You Should Know
                    Hotel Zante Weddings
                    Hotel Zante family party
                    Live your myth in Greece</p>
                </div>
                <div className="footer">
                    <span>USEFUL LINKS</span>
                    <p>Location<br/>
                    Gallery<br/>
                    Contact us<br/>
                    About us<br/>
                    History</p>
                </div>
                <div>
                    <span>CONTACT US</span>
                    <p>
                    25, Navagio Zakynthos, Greece<br/>
                    Phone: 123-12345678<br/>
                    Email: contact@hotelzante.com<br/>
                    </p>
                </div>
            </div>
        )
    }
}
