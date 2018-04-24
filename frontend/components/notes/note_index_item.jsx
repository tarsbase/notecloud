import React from 'react';
import { Link } from 'react-router-dom';

export default class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { note } = this.props;
    return (
      <li className="note-list-item">
        <div className="note-title">{note.title}</div>
        <div>{note.last_updated}</div>
      </li>
    );
  }
}
