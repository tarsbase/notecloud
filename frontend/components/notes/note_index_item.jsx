import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openDeleteModal('notes', this.props.note);
  }

  render() {
    const { note } = this.props;
    // console.log(this.props.match.params);
    let linkPath;
    if (this.props.match.params.notebookId) {
      linkPath = `/notebooks/${this.props.match.params.notebookId}/notes/${note.id}`;
    } else {
      linkPath = `/notes/${note.id}`;
    }
    return (
      <Link to={linkPath}>
        <li className="note-list-item list-item">
          <div className="list-item-header">
            <div className="note-list-item-info note-title">{note.title}</div>
            <i
              className="fa fa-trash list-item-trash"
              onClick={this.handleClick}
            />
          </div>
          <div className="note-list-item-info note-updated">
            {note.last_updated} AGO
          </div>
          <div className="note-list-item-info note-body">
            {note.body.slice(0, 150)}
          </div>
        </li>
      </Link>
    );
  }
}

export default withRouter(NoteIndexItem);