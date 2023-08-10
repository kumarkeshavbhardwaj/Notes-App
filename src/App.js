import "./App.css";
import { useEffect, useState } from "react";
import DisplayNote from "./components/DisplayNote";
import EmptyNotes from "./components/EmptyNotes";
import CreateNote from "./components/CreateNote";


function App() {

  const [receivedValue, setReceivedValue] = useState([]);



  const handleValueFromChild = (value) => {
    console.log(`Parent value: ${value}`)
    setReceivedValue(value);
  };


  return (
    <>
      <div className="logo">Notes App</div>
      <div className="container">
      <CreateNote onValueSend={handleValueFromChild}></CreateNote>
      {/* <EmptyNotes></EmptyNotes> */}
        <DisplayNote></DisplayNote>
        <h1>Total todos: {receivedValue.length}</h1>
      </div>
    </>
  );
}

export default App;
