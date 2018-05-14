import React from 'react';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { note: this.props.note, modalIsOpen: false };
    console.log(this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.note !== this.state.note) {
      this.setState({ note: nextProps.note });
    }
  }

  openModal(e) {
    e.preventDefault();
    if (this.state.note.id) {
      this.setState({ modalIsOpen: true });
    } else {
      this.setState({note: { title: '', body: ''}});
    }
  }

  closeModal(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ modalIsOpen: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state.note);
    note.notebook_id = note.notebook_id || this.props.currentNotebook.id;
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
      this.props.history.push("/notes");
    }, 400);
  }

  render() {
    const modalClasses = ['fs-modal'];
    if (this.state.modalIsOpen) {
      modalClasses.push('show-fs-modal');
    } else {
      modalClasses.push('hide-fs-modal');
    }
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
              <i className="fa fa-trash trash" onClick={this.openModal} />
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
          <div className={modalClasses.join(' ')}>
            <div className="delete-modal-content">
              <div className="delete-modal-header">
                <div className="fa fa-trash fa-2x" />
                <div>DELETE NOTE</div>
              </div>
              <div className="delete-modal-warning">
                Are you sure you want to delete {this.state.note.title}?
              </div>
              <div className="delete-modal-btns">
                <div
                  className="btn btn-cancel delete-modal-btn"
                  onClick={this.closeModal}
                >
                  Cancel
                </div>
                <div className="empty-space" />
                <div className="btn btn-success" onClick={this.handleDelete}>
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
