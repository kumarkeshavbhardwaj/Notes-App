import "./App.css";
import { useEffect, useState } from "react";
import DisplayNote from "./components/DisplayNote";
import EmptyNotes from "./components/EmptyNotes";
import CreateNote from "./components/CreateNote";


function App() {

  const [receivedTodos, setReceivedTodos] = useState([]);

  const handleValueFromChild = (value) => {
    console.log(`Parent value: ${value}`)
    setReceivedTodos(value);
  };


  return (
    <>
      <div className="logo">Notes App</div>
      <div className="container">
      <CreateNote onValueSend={handleValueFromChild}></CreateNote>
      {receivedTodos.length===0 ? <EmptyNotes></EmptyNotes> : <DisplayNote todos={receivedTodos}></DisplayNote>}
      </div>
    </>
  );
}

export default App;
