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
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes}
        </ul>
      </div>
    );
  }
}