import React, { Component } from "react";
import Note from "../Note";
import "./Notes.css";

function Notes({notes}){
  return (
    <ul className="notes-list">
      {notes.map((note, index) => {
        return (
          <li className="note-item" key={index}>
            <Note title={note.title} text={note.text}/>
          </li>
        );
      })}
    </ul>
  );
}

export default Notes;
