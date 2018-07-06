import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.classList.contains('fa-trash')) {
      this.props.openDeleteModal('notes', this.props.note);
    } else {
      const note = this.props.note;
      if (note.shortcut) {
        note.shortcut = false;
      } else {
        note.shortcut = true;
      }
      this.props.updateNote(note);
    }
  }

  render() {
    const { note } = this.props;
    let linkPath;
    if (this.props.match.params.notebookId) {
      linkPath = `/notebooks/${this.props.match.params.notebookId}/notes/${
        note.id
      }`;
    } else if (this.props.match.params.tagId) {
      linkPath = `/tags/${this.props.match.params.tagId}/notes/${note.id}`;
    } else {
      linkPath = `/notes/${note.id}`;
    }
    const starClassses = ['fa', 'fa-star', 'list-item-btn'];
    if (note.shortcut) {
      starClassses.push('star-selected');
    }
    return <Link to={linkPath}>
        <li className="note-list-item list-item">
          <div className="list-item-header">
            <div className="note-list-item-info note-title">
              {note.title}
            </div>
            <div>
              <i className={starClassses.join(' ')} onClick={this.handleClick}/>
              <i className="fa fa-trash list-item-btn" onClick={this.handleClick} />
            </div>
          </div>
          <div className="note-list-item-info note-updated">
            {note.created} AGO
          </div>
          <div className="note-list-item-info note-body">
            {note.body.slice(0, 150)}
          </div>
        </li>
      </Link>;
  }
}

export default withRouter(NoteIndexItem);
