import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { ToDoContext } from './TodoContext'


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


    <CreateTodoButton />
    </React.Fragment>
    );
}

export default AppUI