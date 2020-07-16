import React from 'react';
import './StudentRegForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select'
import Courses from './StudentRegCourses';


const options = [
    { value: '100', label: '100'},
    { value: '200', label: '200'},
    { value: '300', label: '300'},
    { value: '400', label: '400'},
    { value: '500', label: '500'}
];

const customeStyle = {
    option: (provided, state) => ({
        ...provided,
        padding: 20,
        opacity: 0.8,
        cursor: 'pointer',
        fontWeight: 'bold',
        color: state.isSelected ? '#000001' : 'black',
        backgroundColor: state.isSelected ? 'white' : 'white',
        '&:hover': {
            backgroundColor: 'grey',
            color: 'black',
            fontWeight: 'bold'
        }
        
    }),
    control: (provided) => ({
        ...provided,
        border: '2px solid black',
        boxShadow: 'none',
        '&:hover': {
            border: '2px solid black'
        },
        width: '300px',
        marginTop: '5%',
        placeholder: 'Level',
    }),

    singleValue: (provided, state)=> ({
        ...provided,
        color: state.data.color,
    })
}

class Registration extends React.Component {
    constructor(props){
        super(props)
       this.state={registration: "", redirect: null, password: true, selectedOption: null}
    }

    handleChange =(selectedOption)=> {
        this.setState({ selectedOption });
        console.log('Option selected', selectedOption);
    }
    
    changePass = ev => {
        this.setState({ change: !this.state.change })
    }
    onSubmit=()=>{
        this.props.history.push('/placement')
    }
     changePassword =(e)=> {
         this.setState ({ password: !this.state.password})
     }
    con
    
    render(){
        const { title } = this.props;
        const { password } = this.state
        //const { selectedOption } = this.state;

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
                    <p className="enter">Re-enter Password</p>
                    
                    <div style={{ 'position': 'relative'}}>
                    <input  placeholder="Re-enter Password"  type={password ? "password" : "input"} name="password" />
                        <span onClick={this.changePassword}>
                            <span>
                                {password ? 
                                <FontAwesomeIcon icon={faEye} className="eye"/> : 
                                <FontAwesomeIcon icon={faEyeSlash} className="eye"/>
    }
                            </span>
                        </span>
                        </div>
                    <p className="enter">Matriculation Number:</p>
                    <input type="text" className="matnum" name="matnum" placeholder="Matric No"/>
                    
                <p className="enter">Course</p>
                <Courses/>
                <p className="enter">Level</p>
                <Select 
                options = {options}
                defaultValue = {options[0]} 
                isClearable
                styles = {customeStyle}
                onChange = {this.handleChange}
                autoFocus = {true}
                />

                    <input className="reg-button" type="button" value="Continue" onClick={this.onSubmit}/>
                </div>
                <div className="regBottom"></div>
            </div>
        );
    }
}

export default (Registration);


