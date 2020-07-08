import React from 'react';
import Header from './navbar';
import Footer from './footer'
import Pic from './homepic.jpg'
import './home.css'

class Home extends React.Component {
    render(){

        return<div>
            <Header/>
            <h2 className="welcome">Welcome to the Digital SIWES platform</h2>
           <div className="words">
            <h3 className="digital">Go Digital</h3>
            <p className="txt">It's time to throw away those paper logbook entry and switch to a digital program. Harness the power of technology; from building a live database and connecting it to portals online, to collecting data and storing the day-to-day activities, OnlineSiwes is here to ensure that your SIWES program is done mostly digitally and away from the traditional system.</p>
            <img className="Pic" src={Pic} alt={Pic}/>
            </div>
            <Footer/>
        </div>
    }
}

export default Home;