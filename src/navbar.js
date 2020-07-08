import React from 'react'
import Logo from './siweslogo.png'
import Office from './computer.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
import {Link,NavLink,withRouter } from 'react-router-dom'

const Navbar =(props)=>{
    console.log(props)
return (
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <div className="nav">
                
            <h1 className="topbar">Online SIWES
            <div className="cont">
            <FontAwesomeIcon icon={faPhone}/>
            <span> {' '} +234-7031786051, {'  '} +234-7031786051</span>{'  '}
            <span className="mail">
              <FontAwesomeIcon icon={faMailBulk}/>
               {' '} corporate@itf.gov.ng</span>
            </div>
            </h1>
            <div className="position">
            <ul className="link">
                <Link to="/">
                <img className="ima" src={Logo} alt={Logo}/>
                </Link>
                <div className="clicks">
                <li>
                <NavLink className="first" to="/" >Home</NavLink>
                </li>
                <li>
                <NavLink className="navi" to="/about" >About</NavLink>
                </li>
                <li>
                <NavLink className="navi" to="/contact" >Contact</NavLink>
                </li>
                </div>
                <div className="butt">
              <Link to="/signup">
                <button color="white" className="is-rounded">
                  <span>Register</span>
                </button>
              </Link>
              
                <Link className="log" to="/login">
                <button color="white" className="is-rounded">
                  <span>Login</span>
                </button>
              </Link>
              </div>
            </ul>
            </div>
            <div className="container">
            <img className="office" src={Office} alt={Office}/>
            <div className="imgText">Trasnforming SIWES into the digital world</div>
            </div>
            </div>
        </div>
    </nav>
)
}

export default withRouter(Navbar)