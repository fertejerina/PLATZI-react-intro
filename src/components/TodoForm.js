import React, { useState, useContext } from "react";
import { ToDoContext } from "./TodoContext";
import '../css/TodoForm.css'

function TodoForm() {
    const [newToDoValue, setNewToDoValue] = useState('')
    const{ 
        addToDo, setOpenModal
    } = useContext(ToDoContext);

    const onChange = (event) => {
    setNewToDoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue)
        setOpenModal(false)
    }


    return(
        <form onSubmit={onSubmit}>
            <label className="title-modal">Introduce aqui tu 'ToDo'</label>
            <textarea className="write-area"
            value={newToDoValue}
            onChange={onChange}
            placeholder="Escribe aqui."/>
            <div className="buttons-area">
                <button onClick={onCancel} type="button">Cancelar</button>
                <button type="submit">Añadir</button>
            </div>
        </form>
    );
};

export { TodoForm }