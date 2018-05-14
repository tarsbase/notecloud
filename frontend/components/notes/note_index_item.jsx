import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  closeModal(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ modalIsOpen: false });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteNote(this.props.note.id);
    this.closeModal();
    setTimeout( () => {
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
    const { note } = this.props;
    return (
      <Link to={`/notes/${note.id}`}>
        <li className="note-list-item list-item">
          <div className="list-item-header">
            <div className="note-list-item-info note-title">{note.title}</div>
            <i
              className="fa fa-trash list-item-trash"
              onClick={this.openModal}
            />
          </div>
          <div className="note-list-item-info note-updated">
            {note.last_updated} AGO
          </div>
          <div className="note-list-item-info note-body">
            {note.body.slice(0, 150)}
          </div>
        </li>
        <div className={modalClasses.join(' ')}>
          <div className="delete-modal-content">
            <div className="delete-modal-header">
              <div className="fa fa-trash fa-2x" />
              <div>DELETE NOTE</div>
            </div>
            <div className="delete-modal-warning">
              Are you sure you want to delete {note.title}?
            </div>
            <div className="delete-modal-btns">
              <div
                className="btn btn-cancel delete-modal-btn"
                onClick={this.closeModal}
              >
                Cancel
              </div>
              <div className="empty-space"></div>
              <div className="btn btn-success" onClick={this.handleDelete}>Delete</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(NoteIndexItem);