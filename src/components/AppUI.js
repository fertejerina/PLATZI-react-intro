import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { ToDoContext } from './TodoContext'
import { Modal } from './Modal'


function AppUI() {
    const {
      error,
      loading,
      searchedToDos,
      completeToDo,
      deleteToDo
    } = React.useContext(ToDoContext)

    return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoList >
      {error && <p>Hubo en error.</p>}
      {loading && <p>Cargando...</p>}
      {(!loading && !searchedToDos.length) && <p>Crea tu primer ToDo!</p>}
      {searchedToDos.map(todo => (
        <TodoItem
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeToDo(todo.text)}
        onDelete={() => deleteToDo(todo.text)}
        searchedToDos={searchedToDos}
        />
        ))}
    </TodoList>

    <Modal>
        <h2>Introduce aqui tu 'ToDo'</h2>
        <input placeholder='Ej: "Pasear al perro"'></input>

    </Modal>

    <CreateTodoButton />
    </React.Fragment>
    );
}

export default AppUI