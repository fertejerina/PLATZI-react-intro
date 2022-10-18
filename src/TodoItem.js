import React from "react";
import './TodoItem.css'

function TodoItem (props){
    const onComplete = () => {
        alert(`Ya completaste el todo "${props.text}"`)
    };
    const onDelete = () => {
        alert(`Borraste el todo "${props.text}"`);
    }
    return (
        <li className='TodoItem'>
            <span 
            className='TodoItem-hecho'
            onClick={onComplete}
            >
                Hecho!
            </span>

            <p className='TodoItem-text'>{props.text}</p>

            <span 
            className='TodoItem-x'
            onClick={onDelete}
            >
                x
            </span>
        </li>
    )
}

export { TodoItem };