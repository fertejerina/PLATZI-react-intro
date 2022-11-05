import React, { useContext } from 'react';
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
      deleteToDo,
      openModal,
      setOpenModal,
    } = useContext(ToDoContext)

    return (
    <>
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

        {!!openModal && (
          <Modal/>
        )}
        

    <CreateTodoButton
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
    </>
    );
}

export default AppUI