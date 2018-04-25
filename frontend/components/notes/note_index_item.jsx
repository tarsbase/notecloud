import React from 'react';
import { Link } from 'react-router-dom';

export default class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { note } = this.props;
    return <li className="note-list-item">
        <div className="note-title">{note.title}</div>
        <div className="note-updated">{note.last_updated} AGO</div>
        <div className="note-body">{note.body.slice(0, 150)}</div>
      </li>;
  }
}
