import React from 'react';
import { withRouter } from 'react-router-dom';

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.classList.contains('list-item-trash')) {
      return;
    }
    const { setCurrentNotebook, notebook, updateNote, note } = this.props;
    if (setCurrentNotebook) {
      if (note.id) {
        note.notebook_id = notebook.id; 
        updateNote(note);
      } else {
        setCurrentNotebook(notebook);
      }
      this.props.closeNotebooksDropdown();
    } else {
      this.props.history.push(`/notebooks/${notebook.id}/notes`);
      this.props.closeNotebooksModal();
    }
  }

  handleDelete(e) {
    e.preventDefault();
    const { openDeleteModal, notebook } = this.props;
    openDeleteModal('notebooks', notebook);
  }

  render() {
    const { notebook, currentNotebook } = this.props;
    const titleClasses = ['notebook-item-title'];
    let selectedCheck;
    if (currentNotebook && currentNotebook.name === notebook.name) {
      titleClasses.push('selected-notebook');
      selectedCheck = <i className="fa fa-check-circle selected-check" aria-hidden="true" />;
    } else {
      selectedCheck = '';
    }
    return (
      <li className="notebook-list-item list-item" onClick={this.handleClick}>
        <div className="list-item-header">
          <div className={titleClasses.join(' ')}>{notebook.name}</div>
          {!currentNotebook && (
            <div
              className="fa fa-trash list-item-btn"
              onClick={this.handleDelete}
            />
          )}
          {selectedCheck}
        </div>
        {!this.props.setCurrentNotebook && (
          <div className="note-count">{notebook.notes.length} notes</div>
        )}
      </li>
    );
  }
}

export default withRouter(NotebookIndexItem);