import React from 'react';
//import './homepage.css';
import Home from './home.js';
import Contact from './Contact.js'
import About from './about.js'
import notFound from './notFound'
import { Route, Redirect, Link, BrowserRouter as Router, NavLink, Switch, BrowserRouter } from 'react-router-dom';
import Login from './LoginForm.js'
import Register from './StudentRegForm.js'
import logbook from './logbook.js'
import history from './History'
import placement from './placement'
import Navbar from './navbar';
import Account from './studentaccount'
import LoginScreen from './LoginScreen'

  class Homepage extends React.Component {
    constructor(props){
      super(props)
      this.state={user: {}}
    }

    render(){
      return(
  <BrowserRouter history={history}>
    <div className="">
      <Switch>
      <Route exact path="/" component={Home} />
      <Redirect exact from="/" to="/about.js"/>
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
      <Route path="/logbook" component={logbook}/>
      <Route path="/placement" component={placement}/>
      <Route path="/account" component={Account}/>
      <Route path="/loginScreen" component={LoginScreen} />
      <Route component={notFound}/>
      </Switch>
   
    </div>
    
        
      
  </BrowserRouter>
      )
    }
  }

export default (Homepage);