import React from "react";
import "../App.css";

const DisplayNote = () => {
  return (
    <div className="note-list-area">
      <ul className="list">
        <li>
          <div className="icon-container">
            <i class="fa-solid fa-note-sticky note-icon"></i>
            <div className="side-icons">
              <i class="fa-solid fa-pen edit-icon"></i>
              <i class="fa-solid fa-trash delete-icon"></i>
            </div>
          </div>
          <p>01 Dec, 2022</p>
        </li>
      </ul>
    </div>
  );
};

export default DisplayNote;
