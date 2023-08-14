import "./App.css";
import { useEffect, useState } from "react";
import DisplayNote from "./components/DisplayNote";
import EmptyNotes from "./components/EmptyNotes";
import CreateNote from "./components/CreateNote";


function App() {

  const [todos, setTodo] = useState([]);

  // useEffect(() => {
  //   console.log(` USEFX - ${todos.length}`)
  // }, [todos.length])

  const handleDelete = (id) => {
    console.log(`deleteNote init - ${id}`)
    console.log(`todo available: ${todos.length}`);
    const newList = todos.filter((todo) => todo.id !== id); // Create a copy of the original list
    setTodo(newList);
  };

  const addTodo = (text) => {
    if(text!==''){
      generateRandomNumber(text);
    }
  }

  const generateRandomNumber = (text) => {
    const random = Math.floor(Math.random() * 100) + 1;
    getDate(random,text); // Generates a random number between 1 and 100
  };

  const getDate = (random,text) => {
  const formattedDate = Date.now()
  const newTodo = {
        id: random,
        text: text,
        date: formattedDate,
      }
      setTodo([...todos, newTodo]);
    }
    
  return (
    <>
      <div className="logo">Notes App</div>
      <div className="container">
      <CreateNote addTodo={addTodo}></CreateNote>
      {todos.length===0 ? <EmptyNotes></EmptyNotes> : <DisplayNote handleDelete={handleDelete} todos = {todos}></DisplayNote>}
      </div>
    </>
  );
}

export default App;
