import React from 'react';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.noteAction);
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
            onChange={this.handleChange('title')}
          />
          <input
            type="textarea"
            className="note-body-input"
            value={this.state.body}
            onChange={this.handleChange('body')}
          />
        </form>
      </div>
    );
  }
}
