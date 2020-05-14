import React, { Component } from 'react';
import "./footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <span>HOTEL LOVETECH</span>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetuer adipiscing elit,<br/>sed diam nonummy nibh euismod tincidunt u<br/>t laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className="footer">
                    <span>LATEST NEWS</span>
                    <p>LOVETECH HOTEL in pictures<br/>
                    10 Things You Should Know<br/>
                    Hotel Zante Weddings<br/>
                    Hotel Zante family party<br/>
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
                <div className="footer">
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
