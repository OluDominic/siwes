import React from 'react';
import './LoginForm.css';
import Logbook from './logbook'
import Pic from './loginstu.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={submitted: "", username: "", password: true, redirect: null, pass: ''}
    }
    changePassword=(e)=>{
        this.setState({
            password: !this.state.password
        })
    }

    onSubmit=()=>{
        this.props.history.push('/logbook')
    }
    
    loginChangeHandler=(event)=>{
        this.setState({ username: event.target.value})
    }

    loginSubmitHandler=(event)=>{
        event.preventDefault();
        this.setState({submitted: true, login: this.state.login})
    }

    handleClick(event){
        var apiBaseUrl = "gttp://localhost:4000/api/";
        var self = this;
        var payload = {
            "matno": this.state.username,
            "password": this.state.pass
        }
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
            console.log(response);
            if (response.data.code == 200) {
                console.log("Login successfull");
                var logbook=[];
                logbook.push(<Logbook appContext=
                    {self.props.appContext}/>)
                self.props.appContext.setState({loginPage:[],
                logbook:logbook})
            } else if (response.data.code == 204) {
                console.log("Username password do not match");
                alert("username password do not match")
            } else {
                console.log("Username does not exists");
                alert("Username does not exist");
            }

        })
        .catch(function (error) {
            console.log(error);
        })
    }


    render(){
        const {password} = this.state;
        
    
        return(
            <div className="login">
                <h1 className="logDetails">Login Details</h1>
                <div>
                    
                <img src={Pic} alt={Pic}/>
                    <form onSubmit={this.loginSubmitHandler}>
                        
                        <div className="loginDetails">
                        <h3 className="signIn" style={{'margin-right': '200px'}}>Sign In</h3>
                        <input id="effect" type="text" placeholder="Mat-no" name="username" onChange={(event, newValue) =>
                        
                        this.setState({username: newValue})} value={this.loginDetails}/>
                        <div>
                        <div style={{ 'position': 'relative'}}>
                        <input id="effect" onChange={(event,newValue)=> 
                        this.setState({pass: newValue})
                        }
                         placeholder="Password"  type={password ? "password" : "input"} name="password" />
                        <span onClick={this.changePassword}>
                            <span>
                                {password ? 
                                <FontAwesomeIcon icon={faEye} className="eye"/> : 
                                <FontAwesomeIcon icon={faEyeSlash} className="eye"/>
    }
                            </span>
                        </span>
                        </div>
                        </div>
                        <input type="button" className="but" onClick={this.onSubmit} value="login" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;