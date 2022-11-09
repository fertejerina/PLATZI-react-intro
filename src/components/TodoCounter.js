import React from 'react';
import '../css/TodoCounter.css'
import { ToDoContext } from './TodoContext'

function TodoCounter (){
    const {totalToDos, completedToDos} = React.useContext(ToDoContext)
    return(
        <div>
        <h1>toDo Machine</h1>
        <h2 className='TodoCounter'> Has completado {completedToDos} de {totalToDos} ToDo's</h2>
        </div>
    )
}

export { TodoCounter };