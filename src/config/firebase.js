import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const siwesConfig = {
        apiKey: "AIzaSyD3RSf4WZEW_nr4IvW6KLhGngx_HExWSw0",
        authDomain: "siwes-config.firebaseapp.com",
        databaseURL: "https://siwes-config.firebaseio.com",
        projectId: "siwes-config",
        storageBucket: "siwes-config.appspot.com",
        messagingSenderId: "1041875994997",
        appId: "1:1041875994997:web:fe76157b1c57ef41ddab3c"
}

const fire = firebase.initializeApp(siwesConfig);
export default fire;