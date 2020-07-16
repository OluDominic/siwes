import React from 'react'
import Logo from "./siweslogo.png";
import './logbook.css'
import StudentAccount from './studentaccount'

class Log extends React.Component {

    state={file: null, date: new Date().toLocaleString(), chars_left: 400,
         chars_exceed: false, post_text: '', max_length: ''}

    onFileChange=(event)=>{
        this.setState({file: event.target.files[0]})
    }

    onFileUpload=()=>{
        const formData = new FormData();

        formData.append(
            "myFile", this.state.file,
            this.state.file.name
        );
        console.log(this.state.file)
    }

    textInput=(event)=>{
        var input = event.target.value;
    
        this.setState({
            chars_left: input.length,
            chars_exceed: input.length >  400  ?  true  :  false,
            post_text: input,
            max_length: this.chars_left
        });
    
}
    

    
    componentWillUnmount(){
        clearInterval(this.currentTime)
    }

    tick=()=>{
        this.setState({
            date: new Date().toLocaleString()
        })
    }
    fileData=()=>{
        if (this.state.file) {
            return(
                <div>
                    <h2>File Details</h2>
            <p>File Name: {this.state.file.name}</p>
            <p>File Type: {this.state.file.type}</p>
            <p>
                Last Modified: {" "}
                {this.state.file.lastModifiedDate.toDateString()}
            </p>
                </div>
            );
        } else {
            return(
            <div>
                <br />
                <h4>Choose before Pressing the Upload button</h4>
            </div>
            )
        }
    }
render(){
    this.textCount= this.props.textCount
    const date = new Date();
    date.getDate();
    return (
        <div class="logbook">
            <div className="top">
                <img className="logo" src={Logo} alt="Logo"/>
                <h1 className="stuPortal">Logbook</h1>
            </div>
            <div>
                <StudentAccount />
            </div>
            <div className="body">
                <h4 className="workdone">New Work Done</h4>
                <form className="entry">
                    
                    <h2 className="date">Today's Date: {this.state.date}</h2><br/>
                    <p className="des">Description of workdone</p>
                    <textarea maxLength={400} rowSpan={10} value={this.state.post_text} className="note" placeholder="Enter work done" name="workdone" onChange={this.textInput}/>
                    <text className="tex">{ this.state.chars_left }/400</text>
                    <p className="notice">Attachment where necessary (For your sketches, Diagrams and Graphs upload a document 
                        with file types.pdf, .doc, .docx, Max Size 3mb)
                    </p>
                    <input className="file" type="file" onChange={this.onFileChange}/>
                    <button className="upload" onClick={this.onFileUpload}>Upload</button><br/><br/>
                    <input className="save" type="button" value="Save" name="save"/>
                    <input className="save" type="button" value="Cancel" name="calcel"/>
                </form>
            </div>
            <div className="div"><span className="bottomText">going digital....</span></div>
        </div>
    );
}

}

export default Log;