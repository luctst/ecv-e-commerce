import './style.scss';
import React, { useState } from 'react';
const avatar = 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';

function Upload({ children, image, required, onChange}) {

    const [file, setFile] = useState(image ? image : avatar);

    function handleChange(event) {
        let src = event.target.value;
        src = !src || src === '' ? avatar : src;
        setFile(src);
        if(onChange) {
            onChange(src)
        }
    }

    return (
        <div className="upload">
            <div className="avatar">
                <img src={file} alt="Avatar"/>
            </div>
            <label>
                <span>{children}</span>
                <input required={required} defaultValue={image ? image : ''} type="text" onChange={e => handleChange(e)}/>
            </label>
        </div>
    )
}

export default Upload;