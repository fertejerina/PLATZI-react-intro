import React from "react";
import '../css/TodoItem.css'

function TodoItem (props){

    return (
        <li className='TodoItem'>
            <span 
            className='TodoItem-hecho'
            onClick={props.onComplete}
            >
                H
            </span>


            <p className='TodoItem-text'>{props.text}</p>

            <span 
            className='TodoItem-x'
            onClick={props.onDelete}
            >
                x
            </span>
        </li>
    )
}

export { TodoItem };