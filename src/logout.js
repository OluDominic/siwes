import React from 'react';
import firebase from 'firebase';

const logOutUser = ()=> {
    firebase.auth().signOut();
};
const LogOut =()=> {

    return(
    <button onClick={logOutUser} className="logout-button">
        Logout
    </button>
    );
}

export default LogOut;