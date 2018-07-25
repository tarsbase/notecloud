import React from 'react';
import NoteIndexItem from './note_index_item';
import LoadingSpinnerContainer from '../spinners/loading_spinner_container';
import { isEqual } from 'lodash/lang';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.handleScroll = this.handleScroll.bind(this);
    this.fetchNextPage = this.fetchNextPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shortcutsModalIsOpen) return;
    if (
      (this.props.shortcutsModalIsOpen && !nextProps.shortcutsModalIsOpen) ||
      !isEqual(this.props.getOptions, nextProps.getOptions)
    ) {
      this.page = 1;
      nextProps.getAction(this.page, 'replace', nextProps.getOptions);
    }
  }

  componentDidMount() {
    if (!this.props.shortcutsModalIsOpen) {
      this.props.getAction(this.page, 'concat', this.props.getOptions);
    }
  }

  handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (
      bottom &&
      this.props.noteCount > this.props.notes.length &&
      !this.props.loadingSpinnerIsVisible
    ) {
      e.target.scrollTo(0, e.target.scrollHeight);
      this.fetchNextPage();
    }
  }

  fetchNextPage() {
    this.page += 1;
    this.props.getAction(this.page, 'concat', this.props.getOptions);
  }

  render() {
    const { headerTitle, noteCount, updateNote, openDeleteModal } = this.props;
    let notes;
    notes = this.props.notes.map(note => (
      <NoteIndexItem
        key={note.id}
        note={note}
        openDeleteModal={openDeleteModal}
        updateNote={updateNote}
      />
    ));
    const noteMsg = this.props.noteCount === 1 ? 'note' : 'notes';
    return (
      <div className="notes-index-container" onScroll={this.handleScroll}>
        <div className="sidebar-header">
          <h1>{headerTitle}</h1>
          <h3>{`${noteCount} ${noteMsg}`}</h3>
        </div>
        <ul>{notes}</ul>
        <LoadingSpinnerContainer />
      </div>
    );
  }
}
