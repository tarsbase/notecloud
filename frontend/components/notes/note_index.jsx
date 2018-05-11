import React from 'react';
import NoteIndexItem from './note_index_item';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes.sort((a,b) => {
      const aDate = new Date(a.updated_at);
      const bDate = new Date(b.updated_at);
      return bDate - aDate;
    }).map( note => <NoteIndexItem key={note.id} note={note}/>);
    const noteMsg = notes.length === 1 ? 'note' : 'notes';
    return <div className="notes-index-container">
        <div className="sidebar-header">
          <h1>NOTES</h1>
          <h3>{notes.length} {noteMsg}</h3>
        </div>
        <ul>{notes}</ul>
      </div>;
  }
}