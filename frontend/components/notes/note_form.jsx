import React from 'react';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.note !== this.state) {
      this.setState(nextProps.note);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    note.notebook_id = note.notebook.id || this.props.currentNotebook.id;
    this.props.action(note);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteNote(this.props.note.id);
    this.props.history.push("/notes");
  }

  render() {
    if (this.props.note) {
      return (
        <div className="note-form-page">
          <div className="note-form-header">
            <div className="note-form-top-header">
              <input
                type="button"
                onClick={this.handleSubmit}
                value="Save"
                className="btn btn-success note-form-submit"
              />
              <i className="fa fa-trash trash" onClick={this.handleDelete}/>
            </div>
            <div className="note-form-bottom-header">
              <div className="note-notebook-info">
                <i className="fa fa-book" />
                <div className="note-notebook-name">
                  {this.props.note.notebook_name}
                </div>
                <div className="note-tags" />
              </div>
            </div>
          </div>
          <form className="note-form">
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
          </form>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
