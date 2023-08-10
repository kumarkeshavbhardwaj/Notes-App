import React, { useEffect } from 'react'
import "../App.css";
import { useState } from 'react';


const CreateNote = (props) => {
  
  const [todos, setTodo] = useState([]);
  const [val, setVal] = useState('');

  const sendValueToParent = () => {
    console.log(`sending value to Parent: ${todos.length}`)
    const valueToSend = todos;
    props.onValueSend(valueToSend);
  };


  const generateRandomNumber = () => {
    console.log('num fun init');
    const random = Math.floor(Math.random() * 100) + 1;
    console.log(`num fun end - ${random}`);

    getDate(random); // Generates a random number between 1 and 100
  };

  const getDate = (random) => {
  console.log('date fun init');
  const formattedDate = Date.now()
  // const currentDate = new Date();
  // const day = currentDate.getDate();
  // const month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
  // const year = currentDate.getFullYear();

  // // Pad single digits with a leading zero if necessary
  // const formattedDay = day < 10 ? `0${day}` : day;
  // const formattedMonth = month < 10 ? `0${month}` : month;

  // const formattedDate = `${formattedDay} ${formattedMonth} ${year}`;
  console.log(`date fun end - ${formattedDate}`);


  const newTodo = {
        id: random,
        text: val,
        date: formattedDate,
      }
      setTodo((prevTodos) => [...prevTodos, newTodo]);
      setVal('')
      console.log(`addtodo fun end - ${todos.length}`);
  }

  useEffect(() => {
    
    console.log(`value in child: ${todos.length}`);
    sendValueToParent();

  }, [todos.length])


  const addTodo = () => {
    console.log('addtodo fun init');
    if(val!==''){
      generateRandomNumber();
    }
  }

  return (
    <div className="create-note-area">
            <textarea value={val} onChange={(e) => setVal(e.target.value)} placeholder='Write something here...'></textarea>
            <div className="button-area">
            <button onClick={addTodo}>Create Note</button>
            <h2></h2>
            </div>
        </div>
  )
}

export default CreateNote