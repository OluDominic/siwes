import React from 'react';
import './studentaccount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function Image() {
        const uploadedImage = React.useRef(null);
        const imageUploader = React.useRef(null);
        const defaultBackground = React.useRef(null);
        
        const _handleImageChange =(e)=>{
            const [file] = e.target.files;
            if (file) {
                const reader = new FileReader();
                const {current} = uploadedImage;
                current.file = file;
                reader.onload = (e) => {
                    current.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        }
        return(
            <div>
            <h1 className="stuPor">Student's Portal</h1>
            <form className="studentAccForm" onSubmit={(e)=>this._handleSubmit(e)}>
                <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
                >
                    <input
                    style={{display: 'none'}}
                    type="file" accept="image/*" ref={imageUploader}
                    onChange={_handleImageChange} multiple="false"/>
                    <div
                    style={{
                        height: '120px',
                        width: '120px',
                        border: "2px solid black",
                        marginRight: '10px'
                    }}
                    onClick={()=> imageUploader.current.click()}
                    >
                      <img
                      ref={uploadedImage}
                      style = {{
                          width: "120px",
                          height: "120px",
                          position: "absolute"
                      }}
                      />
                      
                    </div>
                    
                    Click to upload Image
                </div>
                <span 
                style={{
                    marginLeft: '110px',
                }}
                onClick={defaultBackground}>
                        <FontAwesomeIcon icon={faTrash}/>
                        </span>
            </form>
            
    
            </div>
        );
    }


export default Image;