import "./App.css";
import { useEffect, useState } from "react";
import DisplayNote from "./components/DisplayNote";
import EmptyNotes from "./components/EmptyNotes";
import CreateNote from "./components/CreateNote";


function App() {

  const [todos, setTodo] = useState([]);

  useEffect(() => {
    console.log(todos.length);
    console.log(todos);
  })

  // const deleteNote = () => {

  //   const newList = todos;
  //   const todoIndex = todos.findIndex((todo) => todo.id===props.idDeletion);
  //   newList.splice(todoIndex,1);
  //   setTodo(newList);

  // }

  const addTodo = (text) => {
    // console.log(`addTodo init - ${text}`)
    if(text!==''){
      generateRandomNumber(text);
    }
  }

  const generateRandomNumber = (text) => {
    // console.log(`random init - ${text}`)

    const random = Math.floor(Math.random() * 100) + 1;

    getDate(random,text); // Generates a random number between 1 and 100
  };

  const getDate = (random,text) => {
    // console.log(`getDate init - ${random} - ${text}`)

  const formattedDate = Date.now()
  const newTodo = {
        id: random,
        text: text,
        date: formattedDate,
      }
      setTodo([...todos, newTodo]);
      // console.log(`finished`)
    }


  return (
    <>
      <div className="logo">Notes App</div>
      <div className="container">
      <CreateNote addTodo={addTodo}></CreateNote>
      {todos.length===0 ? <EmptyNotes></EmptyNotes> : <DisplayNote todos = {todos}></DisplayNote>}
      </div>
    </>
  );
}

export default App;
