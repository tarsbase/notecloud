import React from 'react';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    note["notebook_id"] = 1;
    this.props.noteAction(note);

  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div>
        <form className="note-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="note-title-input"
            value={this.state.title}
            placeholder="title"
            onChange={this.handleChange('title')}
          />
          <input
            type="textarea"
            className="note-body-input"
            value={this.state.body}
            placeholder="body"
            onChange={this.handleChange('body')}
          />
          <input type="submit" className="btn btn-success"/>
        </form>
      </div>
    );
  }
}
