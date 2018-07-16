import React from 'react';
import NoteIndexItem from './note_index_item';
import ShortcutIndexItem from './shortcut_index_item';
import LoadingSpinnerContainer from '../spinners/loading_spinner_container';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.getArg !== nextProps.getArg) {
      this.page = 1;
      nextProps.getAndReplace(this.page, nextProps.getArg);
    }
  }

  componentDidMount() {
    this.props.getRelatedAction(this.props.getArg);
    this.props.getAndConcat(this.page, this.props.getArg);
  }

  handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && this.props.noteCount > this.props.notes.length) {
      e.target.scrollTo(0, e.target.scrollHeight);
      this.fetchNextPage();
    }
  }

  fetchNextPage() {
    this.page += 1;
    this.props.getAndConcat(this.page, this.props.getArg);
  }

  render() {
    const {
      headerTitle,
      noteCount,
      updateNote,
      openDeleteModal,
      closeShortcutsModal,
      removeNote
    } = this.props;
    let noteIndexClass;
    let notes;
    const shortcuts = this.props.match.path === '/shortcuts';
    if (shortcuts) {
      notes = this.props.notes.map(note => (
        <ShortcutIndexItem
          key={note.id}
          note={note}
          updateNote={updateNote}
          closeShortcutsModal={closeShortcutsModal}
          removeNote={removeNote}
        />
      ));
      noteIndexClass = 'sidebar-index';
    } else {
      noteIndexClass = 'notes-index-container';
      notes = this.props.notes.map(note => (
        <NoteIndexItem
          key={note.id}
          note={note}
          openDeleteModal={openDeleteModal}
          updateNote={updateNote}
        />
      ));
    }
    const noteMsg = this.props.noteCount === 1 ? 'note' : 'notes';
    return (
      <div className={noteIndexClass} onScroll={this.handleScroll}>
        <div className="sidebar-header">
          <h1>{headerTitle}</h1>
          <h3>{!shortcuts && `${noteCount} ${noteMsg}`}</h3>
        </div>
        <ul>{notes}</ul>
        <LoadingSpinnerContainer />
      </div>
    );
  }
}
