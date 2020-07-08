import React from 'react';
import './LoginForm.css';
import Pic from './loginstu.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={submitted: "", login: "", password: true, redirect: null}
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
        this.setState({ login: event.target.value})
    }

    loginSubmitHandler=(event)=>{
        event.preventDefault();
        this.setState({submitted: true, login: this.state.login})
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
                        <input id="effect" type="text" placeholder="Username" name="username" onChange={this.loginChangeHandler} value={this.loginDetails}/>
                        <div>
                        <div style={{ 'position': 'relative'}}>
                        <input id="effect" placeholder="Password"  type={password ? "password" : "input"} name="password" />
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