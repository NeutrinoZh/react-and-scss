import '../../SCSS/Components/PhotoCheckbox/PhotoCheckbox.scss'
import {v4 as uuidv4} from 'uuid';  
import { useState } from 'react';

function PhotoCheckbox({ className, src }) {
    const [ id,  ] = useState(uuidv4())
// <
    return (
        <div className={className + ' photo-checkbox'}>
            <input id={id} type="checkbox" />
            <label htmlFor={id}> 
                <img src={src}></img>
            </label>
        </div>
    )
}

export default PhotoCheckbox