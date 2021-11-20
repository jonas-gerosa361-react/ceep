import React, { Component } from "react";
import Notes from "./components/Notes";
import Form from "./components/Form";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }

  createNote(title, text){
    const newNote = {title, text};
    const newNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newNotes
    }

    this.setState(newState)
  }

  render() {
    const { notes } = this.state;
    return (
      <section className="content">
        <Form createNote={this.createNote.bind(this)}/>
        <Notes notes={notes}/>
      </section>
    );
  }
}

export default App;
