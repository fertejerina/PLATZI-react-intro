// import './App.css';
import React from 'react';
import AppUI from './AppUI';
import { TodoContext, ToDoProvider } from './TodoContext'

function App() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  )
  }

  export default App;