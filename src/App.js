// import './App.css';
import React from 'react';
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"

const toDos = [
  { text: "Comprar libro de biologia", completed: false },
  { text: "Tomar curso de react", completed: false },
  { text: "Llorar con la llorona", completed: false },
]

function App() {
  return (
    <React.Fragment>
    <TodoCounter />
  
    <TodoSearch />

    <TodoList >
          {toDos.map(todo => (
            <TodoItem
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
            ))}
    </TodoList>
    <CreateTodoButton />
    </React.Fragment>
  )
  }

export default App;
