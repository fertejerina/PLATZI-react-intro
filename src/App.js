// import './App.css';
import React from 'react';
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"

const defaultToDos = [
  { text: "Comprar libro de biologia", completed: true },
  { text: "Tomar curso de react", completed: false },
  { text: "Llorar con la llorona", completed: false },
]

function App() {
  const [toDos, settoDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = toDos.filter(todo => !!todo.completed).length;
  const totalToDos = toDos.length;



  let searchedToDos = [];

  if(!!searchValue.lenght >= 1){
    searchedToDos=toDos
  } else {
    searchedToDos = toDos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }


  return (
    <React.Fragment>
    <TodoCounter
    total={totalToDos}
    completed={completedToDos}
    />
  
    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />

    <TodoList >
          {searchedToDos.map(todo => (
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
