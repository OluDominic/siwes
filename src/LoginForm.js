import React from 'react';
import './LoginForm.css';
import Logbook from './logbook'
import fire from './config/firebase';
import Pic from './loginstu.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={submitted: "",
        user: {},
         username: "",
          password: true,
           redirect: null,
            pass: ''}
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

    handleSubmit =(event)=> {
        event.preventDefault();
        const { username, password } = this.state;
        fire
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then((user) => {
            this.props.history.push('/logbook');
        })
        .catch((error) => {
            this.setState({ error: error});
        })
    }
    render(){
        const {password} = this.state;
        
    
        return(
            <div className="login">
                <h1 className="logDetails">Login Details</h1>
                <div>
                    
                <img src={Pic} alt={Pic}/>
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="loginDetails">
                        <h3 className="signIn" style={{'margin-right': '200px'}}>Sign In</h3>
                        <input id="effect" type="text" placeholder="Mat-no" name="username" onChange={(event, newValue) =>
                        this.setState({username: newValue})} value={this.username}/>

                        <div>
                        <div style={{ 'position': 'relative'}}>
                        <input id="effect" onChange={(event,newValue)=> 
                        this.setState({pass: newValue})
                        }
                         placeholder="Password"  type={password ? "password" : "input"} name="password" 
                         value={this.pass} />
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
                        <input type="button" className="but" value="login" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;