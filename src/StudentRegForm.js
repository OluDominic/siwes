import React from 'react';
import './StudentRegForm.css'

class Registration extends React.Component {
    constructor(props){
        super(props)
       this.state={registration: "", change: true, redirect: null}
    }

    
    
    changePass = ev => {
        this.setState({ change: !this.state.change })
    }
    onSubmit=()=>{
        this.props.history.push('/placement')
    }
    
    render(){
        const { title } = this.props;
        const { change } = this.state;
        
        return(
            <div className="registrationForm">
                <h1 className="regForm">Registration Form</h1>
                <div  className="reg">
                    <h3 className="regHere">Register here</h3>
                    <p className="enter">Enter First Name</p>
                    <input type="text" className="fname" name="fname" placeholder="First name" />
                    <p className="enter">Enter Last Name</p>
                    <input type="text" className="lname" name="lname" placeholder="Last name" />
                    <p className="enter">Enter Email-address</p>
                    <input type="email" className="email" name="email"/>
                    <p className="enter">Enter Password</p>
                    <label className="password">{title}
                <   input type={change ? 'password' : 'input'} className="password__input" />
                    <input type="checkbox" className="password__show" onClick={this.changePass}/>
                    </label>
                    <p className="enter">Re-enter Password</p>
                    <label className="password">{title}
                <   input type={change ? 'password' : 'input'} className="password__input" />
                    <input type="checkbox" className="password__show" onClick={this.changePass}/>
                    </label>
                    <p className="enter">Matriculation Number:</p>
                    <input type="text" className="matnum" name="matnum" placeholder="Matric No"/>
                    <p>Program</p>
                    <input type="text" className="program" name="program"/>
                <div >
                    <p className="enter">Level</p>
                    <select className="select">
                        <option>100</option>
                        <option>200</option>
                        <option>300</option>
                        <option>400</option>
                        <option>500</option>
                    </select><br/>
                </div>
                    <input className="button" type="button" value="Continue" onClick={this.onSubmit}/>
                </div>
                <div className="regBottom"></div>
            </div>
        );
    }
}

export default (Registration);


