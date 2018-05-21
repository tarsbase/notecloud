import React from 'react';
import NoteIndexItem from './note_index_item';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noteIndexIsVisible: true };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.noteIndexIsVisible !== nextProps.noteIndexIsVisible) {
      if (nextProps.noteIndexIsVisible) {
        setTimeout( () => {
          this.setState({ noteIndexIsVisible: true });
        }, 600);
      } else {
        this.setState({noteIndexIsVisible: false });
      }
    }
  }

  componentDidMount() {
    this.props.getAllNotes();
  }

  render() {
    const noteIndexClasses = ['notes-index-container'];
    if (this.state.noteIndexIsVisible) {
      noteIndexClasses.push('show');
    } else {
      noteIndexClasses.push('hide');
    }
    const notes = this.props.notes.sort((a,b) => {
      const aDate = new Date(a.updated_at);
      const bDate = new Date(b.updated_at);
      return bDate - aDate;
    }).map( note => <NoteIndexItem key={note.id} note={note} deleteNote={this.props.deleteNote}/>);
    const noteMsg = notes.length === 1 ? 'note' : 'notes';
    return <div className={noteIndexClasses.join(' ')}>
        <div className="sidebar-header">
          <h1>NOTES</h1>
          <h3>{notes.length} {noteMsg}</h3>
        </div>
        <ul>{notes}</ul>
        
      </div>;
  }
}