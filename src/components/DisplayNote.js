import React, { useEffect } from "react";
import "../App.css";
import ReactTimeago from "react-timeago";

const DisplayNote = (props) => {

  const shortFormatter = (value, unit, suffix) => {
    if (unit === 'second') return 'now';
    return `${value}${unit.charAt(0)} ago`;
  };


  return (
    <div className="note-list-area">
      <ul className="list">
      {props.todos.map((todo, index) => (
          <li key={todo.id}>
            <div className="icon-container">
            <i className="fa-solid fa-note-sticky note-icon"></i>
            <div className="side-icons">
              <i className="fa-solid fa-pen edit-icon"></i>
              <i onClick={()=> props.handleDelete(todo.id)} className="fa-solid fa-trash delete-icon"></i>
            </div>
          </div>
          <p>
            <ReactTimeago date={todo.date} formatter={shortFormatter}></ReactTimeago>
          </p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayNote;
