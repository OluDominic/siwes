import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from './footer'
import './Contact.css'

class Contact extends React.Component {
    render(){
        return (
            <div className="contact">
            <div >
                <div className="conta">
                    <h2>Contact Us</h2>
                </div>
                <div className="contMain">
                    <h3 className="contHead">Follow Us</h3>
                    <span>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </span>

                    <h3 className="contHead">Address</h3>
                    <p>6, Ademola Adetokunbo Crescent, Maitama, Abuja.</p>

                    <h3 className="contHead">Contact Us</h3>
                    <p>07031786324</p>

                    <h3 className="contHead">Open Hours</h3>
                    <p>Weekdays: 10am-4pm</p>
                </div>
            </div>
            <Footer/>
            </div>
        );
    }
}

export default Contact;