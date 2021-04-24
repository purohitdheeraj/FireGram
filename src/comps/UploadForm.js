import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
// import {useState} from 'react';
const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const types = ['image/png', 'image/jpeg', 'image/PNG'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(" ");
            // console.log(selected);
            
        } else{
            setError('Please select an valid file type (png or jpeg)');
            // setFile('');
        }
        // console.log("Changed")
    }

    return (
        <form>
            <label>
            <input type="file" 
            onChange={changeHandler}
            />
            <span style={{color: '#FDB833', fontSize: '2rem'}}>
      +</span>
            </label>
            
            
            <div className="output">
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>

        </form>
    )
}

export default UploadForm;