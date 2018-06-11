import React from 'react';
import NotebooksDropdownContainer from '../modals/notebooks_dropdown_container';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      tag: { name: '' }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.note !== this.state.note) {
      this.setState({
        note: nextProps.note,
        tag: { name: '' }
      });
    }
  }

  componentDidMount() {
    if (this.props.match.params.noteId) {
      this.props.getNote(this.props.match.params.noteId);
    }
  }

  handleTrashClick(e) {
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

  handleChange(entity, field) {
    return e =>
      this.setState({
        [entity]: Object.assign({}, this.state[entity], {
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

  handleKeypress(e) {
    if (e.key === 'Enter') {
      if (this.state.note.id) {
        const note = Object.assign({}, this.state.note);
        const tag = Object.assign({}, this.state.tag);
        this.props.tagNote(tag, note);
      } else {
        this.setState({
          note: Object.assign({}, this.state.note, {
            tags: this.state.note.tags.concat(this.state.tag)
          })
        });
      }
      this.setState({ tag: { name: '' } });
    }
  }

  render() {
    if (this.props.note && this.props.note.notebook && this.props.note.tags) {
      let noteTags;
      if (this.props.note.id) {
        noteTags = this.props.note.tags;
      } else {
        noteTags = this.state.note.tags || [];
      }
      const tags = noteTags.map(tag => {
        const key = tag.id ? tag.id : tag.name;
        return (
          <li className="tag" key={key}>
            {tag.name}
          </li>
        );
      });
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
              <i className="fa fa-trash trash" onClick={this.handleTrashClick} />
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
                <ul className="tag-list">{tags}</ul>
                <input
                  type="text"
                  className="new-tag"
                  placeholder="New Tag..."
                  value={this.state.tag.name}
                  onChange={this.handleChange('tag', 'name')}
                  onKeyPress={this.handleKeypress}
                />
              </div>
            </div>
          </div>
          {this.props.notebooksDropdownIsOpen && <NotebooksDropdownContainer
            note={this.state.note}
            currentNotebook={this.props.note.notebook}
          />}
          <form className="note-form">
            <div className="form-group">
              <input
                type="text"
                className="note-form-input note-title-input"
                value={this.state.note.title}
                placeholder="Title Your Note"
                onChange={this.handleChange('note', 'title')}
              />
            </div>
            <div className="form-group">
              <textarea
                className="note-form-input note-body-input"
                value={this.state.note.body}
                placeholder="Start Writing"
                onChange={this.handleChange('note', 'body')}
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
