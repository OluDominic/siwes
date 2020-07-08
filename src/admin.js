import React, { Fragment } from 'react';

class Admin extends React.Component {
    render(){
        return(
            <Fragment>
                <div>
                    <h3>Administrator</h3>
                    <p>Student</p>
                    <select>
                        <option></option>
                    </select>
                    <p>Supervisor</p>
                    <select>
                        <option></option>
                    </select>
                    <button>Assign</button>
                </div>
            </Fragment>
        );
    }
}

export default Admin;