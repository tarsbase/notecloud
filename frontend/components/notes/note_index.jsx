import React from 'react';
import NoteIndexItem from './note_index_item';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.getArg !== nextProps.getArg) {
      nextProps.getAction(nextProps.getArg);
    }
  }

  componentDidMount() {
    this.props.getRelatedAction(this.props.getArg);
    this.props.getAction(this.props.getArg);
  }

  render() {
    const noteIndexClasses = ['notes-index-container'];
    const notes = this.props.notes
      .map(note => (
        <NoteIndexItem
          key={note.id}
          note={note}
          openDeleteModal={this.props.openDeleteModal}
        />
      ));
    const noteMsg = notes.length === 1 ? 'note' : 'notes';
    return (
      <div className={noteIndexClasses.join(' ')}>
        <div className="sidebar-header">
          <h1>{this.props.headerTitle}</h1>
          <h3>
            {notes.length} {noteMsg}
          </h3>
        </div>
        <ul>{notes}</ul>
      </div>
    );
  }
}
