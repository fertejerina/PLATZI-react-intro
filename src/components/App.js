// import './App.css';
import React from 'react';
import AppUI from './AppUI';
import { TodoContext, ToDoProvider } from './TodoContext'


/* const defaultToDos = [
  { text: "Comprar libro de biologia", completed: true },
  { text: "Tomar curso de react", completed: false },
  { text: "Llorar con la llorona", completed: false },
] */



function App() {


  return (

    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  )
  }

  export default App;