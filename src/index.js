import React from 'react';
import ReactDOM from 'react-dom'
import Message from './homepage';

  class Homed extends React.Component {

    render(){
      return(
        <Message />
      );
    }
  }
ReactDOM.render(
  <Homed />,
  document.getElementById('root')
);
