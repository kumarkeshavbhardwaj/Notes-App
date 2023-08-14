import React, { useEffect } from 'react'
import "../App.css";
import { useState } from 'react';


const CreateNote = (props) => {

  const [text, setText] = useState([]);
  

  return (
    <div className="create-note-area">
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Write something here...'></textarea>
            <div className="button-area">
            <button onClick={
              ()=> { 
              console.log('onClick called')
              props.addTodo(text);
              (console.log(`sending to APP - ${text}`));
              setText('');
            }
            }>Save Note</button>
            <h2></h2>
            </div>
        </div>
  )
}

export default CreateNote