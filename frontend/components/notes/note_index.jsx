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
    this.props.getAction(this.props.getArg);
  }

  render() {
    const noteIndexClasses = ['notes-index-container'];
    if (this.props.tooltipHidden) {
      noteIndexClasses.push('left-margin');
    }
    const notes = this.props.notes
      .sort((a, b) => {
        const aDate = new Date(a.updated_at);
        const bDate = new Date(b.updated_at);
        return bDate - aDate;
      })
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
