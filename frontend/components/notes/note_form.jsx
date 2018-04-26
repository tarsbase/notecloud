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
    note['notebook_id'] = 1;
    this.props.noteAction(note);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className="note-page">
        <div className="note-form-header" />
        <form className="note-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="note-form-input note-title-input"
            value={this.state.title}
            placeholder="Title Your Note"
            onChange={this.handleChange('title')}
          />
          </div>
          <div className="form-group">
            <textarea
              className="note-form-input note-body-input"
              value={this.state.body}
              placeholder="Start Writing"
              onChange={this.handleChange('body')}
            />
          </div>
          <input type="submit" value="Save" className="btn btn-success note-form-submit" />
        </form>
      </div>
    );
  }
}
