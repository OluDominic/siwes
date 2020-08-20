import React from 'react';
import ReactDOM from 'react-dom'
import Message from './homepage';
import firebase from './config/firebase';

  class Homed extends React.Component {
    state = {
      authenticated: false
    };
    componentDidMount() {
      firebase.auth().onAuthStateChanged((authenticated) => {
        authenticated 
        ? this.setState(() => ({
          authenticated: true
        })) 
        : this.setState(() => ({
          authenticated: false
        }))
      })
    }
    render(){
      return(
        <Message authenticated={this.state.authenticated} />
      );
    }
  }
ReactDOM.render(
  <Homed />,
  document.getElementById('root')
);
