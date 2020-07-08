import React from 'react';
import './placement.css';


class Placement extends React.Component {
    constructor (props){
        super(props)
        this.state={submit: ''}
    }
    onSubmit=()=>{
        this.props.history.push('/login')
    }

    render(){
        return(
            <div>
                <div>
                    <h1 className="heading">Placement Table</h1>
                    <form className="placement">
                    <p className="p">Company name</p>
                    <input type="text" placeholder="Enter name of company" name="company" 
                    className="text" />
                    <p className="p">Company Address</p>
                    <input className="text" type="text" placeholder="Enter Address" name="address"/>
                    <p className="p">Section of Work</p>
                    <input className="text" type="text" placeholder="Enter work department"/>
                    <p className="p">Supervisor</p>
                    <input className="text" type="text" name="supervisor" /><br/><br/>
                    <input type="button" value="Submit" onClick={this.onSubmit} className="button"/><br/><br/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Placement;