import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props){
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitleChange(evento){
    evento.stopPropagation();
    this.title = evento.target.value;
  }

  _handleTextChange(evento){
    evento.stopPropagation();
    this.text = evento.target.value;
  }

  _createNote(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="form"
        onSubmit={this._createNote.bind(this)}
      >
        <input
          type="text"
          placeholder="Title"
          className="form-input"
          onChange={this._handleTitleChange.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Write it down your note..."
          className="form-input"
          onChange={this._handleTextChange.bind(this)}
        />

        <button className="form-input form-submit">
          Create Note
        </button>

      </form>
    );
  }
}

export default Form;
