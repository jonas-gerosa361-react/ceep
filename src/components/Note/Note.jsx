import React, { Component } from "react";
import "./Note.css";

function Note({title, text}) {
  return (
    <section className="note">
      <header className="note-header">
        <h3 className="note-title">{title}</h3>
      </header>
      <p className="note-text">{text}</p>
    </section>
  )
}

export default Note;
