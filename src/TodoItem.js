import React from "react";
import './TodoItem.css'

function TodoItem (props){
    return (
        <li className='TodoItem'>
            <span className='TodoItem-hecho'>Hecho!</span>
            <p className='TodoItem-text'>{props.text}</p>
            <span className='TodoItem-x'>x</span>
        </li>
    )
}

export { TodoItem };