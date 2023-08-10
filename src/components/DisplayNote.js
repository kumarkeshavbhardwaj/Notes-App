import React from "react";
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
          <li key={index}>
            {/* {item} */}
            <div className="icon-container">
            <i className="fa-solid fa-note-sticky note-icon"></i>
            <div className="side-icons">
              <i className="fa-solid fa-pen edit-icon"></i>
              <i className="fa-solid fa-trash delete-icon"></i>
            </div>
          </div>
          <p>
            <ReactTimeago date={todo.date} formatter={shortFormatter}></ReactTimeago>
          </p>
            </li>

        ))}




        {/* <li>
          <div className="icon-container">
            <i className="fa-solid fa-note-sticky note-icon"></i>
            <div className="side-icons">
              <i className="fa-solid fa-pen edit-icon"></i>
              <i className="fa-solid fa-trash delete-icon"></i>
            </div>
          </div>
          <p>01 Dec, 2022</p>
        </li> */}
      </ul>
    </div>
  );
};

export default DisplayNote;
