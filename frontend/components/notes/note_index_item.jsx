import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { note } = this.props;
    return (
      <Link to={`/notes/${note.id}`}>
        <li className="note-list-item">
          <div className="note-list-item-info note-title">{note.title}</div>
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
