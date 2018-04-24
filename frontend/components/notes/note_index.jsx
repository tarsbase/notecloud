import React from 'react';
import NoteIndexItem from './note_index_item';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAction();
  }

  render() {
    const notes = this.props.notes.map( note => <NoteIndexItem key={note.id} note={note}/>);
    const noteMsg = notes.length === 1 ? 'note' : 'notes';
    return <div className="notes-index-container">
        <div className="notes-header">
          <h1>NOTES</h1>
          <h3>{notes.length} {noteMsg}</h3>
        </div>
        <ul>{notes}</ul>
      </div>;
  }
}