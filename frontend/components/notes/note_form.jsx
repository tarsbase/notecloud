import React from 'react';
import NotebooksDropdownContainer from '../modals/notebooks_dropdown_container';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.note !== this.state.note) {
      this.setState({
        note: nextProps.note
      });
    }
  }

  componentDidMount() {
    if (this.props.match.params.noteId) {
      this.props.getNote(this.props.match.params.noteId);
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.note.id) {
      this.props.openDeleteModal('notes', this.state.note);
    } else {
      this.setState({ note: { title: '', body: '' } });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state.note);
    note.notebook_id = note.notebook_id || this.props.note.notebook.id;
    this.props.action(note);
  }

  handleChange(field) {
    return e =>
      this.setState({
        note: Object.assign({}, this.state.note, {
          [field]: e.target.value
        })
      });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteNote(this.props.note.id);
    this.closeModal();
    setTimeout(() => {
      this.props.history.push('/notes');
    }, 400);
  }

  openDropdown(e) {
    e.preventDefault();
    this.props.toggleNotebooksDropdown();
  }

  render() {
    if (this.props.note && this.props.note.notebook && this.props.note.tags) {
      const tags = this.props.note.tags.map(tag => (
        <li className="tag" key={tag.id}>{tag.name}</li>
      ));
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
              <i className="fa fa-trash trash" onClick={this.handleClick} />
            </div>
            <div className="note-form-bottom-header">
              <div className="note-notebook-info">
                <i className="fa fa-book" />
                <div className="note-notebook-name">
                  {this.props.note.notebook.name}
                </div>
                <i className="fa fa-angle-down" onClick={this.openDropdown} />
              </div>
              <div className="note-tags">
                <i className="fa fa-tag" />
                <ul>{tags}</ul>
              </div>
            </div>
          </div>
          <NotebooksDropdownContainer
            note={this.state.note}
            currentNotebook={this.props.note.notebook}
          />
          <form className="note-form">
            <div className="form-group">
              <input
                type="text"
                className="note-form-input note-title-input"
                value={this.state.note.title}
                placeholder="Title Your Note"
                onChange={this.handleChange('title')}
              />
            </div>
            <div className="form-group">
              <textarea
                className="note-form-input note-body-input"
                value={this.state.note.body}
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
