import React from 'react';
import './footer.css'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


const Footer =(props)=>{
    console.log(props)
    return (
        <nav>
            <div className="foot">
                    <div>
                    <p className="copyright">Copyright <span>
                        <FontAwesomeIcon icon={faCopyright}/>
                        </span> 2020. All rigths reserved.<br/>
                        <span className="ContactUs">Contact us Here </span>
                        <div>
                            <Link to="/https://www.facebook.com/groups/1614015922252171/">
                        <FontAwesomeIcon icon={faFacebook}/>{" "}
                        </Link>
                        <Link to="/https://twitter.com/nigerialng/status/1191272483300753408">
                        <FontAwesomeIcon icon={faTwitterSquare}/>{" "}
                        </Link>
                        </div>
                        </p>
                        
                    </div>
            </div>
        </nav>
    );
}

export default Footer;