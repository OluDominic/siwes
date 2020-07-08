import React from 'react';

class student extends React.Component {
    constructor(props){
        super(props);
        this.state = {file: '', imagePreviewUrl : ''}
    }

    _handleSubmit(e){
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e){
       e.preventDefault();
       let reader = new FileReader();
       let file = e.target.files[0];

       reader.onloadend = ()=>{
           this.setState({
               file: file,
               imagePreviewUrl: reader.result
           })
       }
       reader.readAsDataURL(file)
    }
    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl}/>)
        }else {
            $imagePreview = (<div className="previewText">
                Select profile picture
            </div>)
        }
        return(
            <div>
            <h1>Student's Portal</h1>
            <form onSubmit={(e)=>this._handleSubmit(e)}>
                <input className="fileInput" type="file" 
                onChange={(e)=> this._handleImageChange(e)} />
                <button className="submitButton" type="submit" 
                onClick={(e)=>this._handleSubmit(e)}>
                    Upload Image
                </button>
            </form>
            <div className="imgPreview">
                {$imagePreview}
            </div>
    
            </div>
        );
    }
}

export default student;