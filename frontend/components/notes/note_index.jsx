import React from 'react';
import NoteIndexItem from './note_index_item';
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
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
      this.fetchNextPage();
     }
  }

  fetchNextPage() {
    this.page += 1;
    this.props.getAndConcat(this.page, this.props.getArg);
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
      <div className={noteIndexClasses.join(' ')} onScroll={this.handleScroll}>
        <div className="sidebar-header">
          <h1>{this.props.headerTitle}</h1>
          <h3>
            {notes.length} {noteMsg}
          </h3>
        </div>
        <ul>{notes}</ul>
        <LoadingSpinnerContainer/>
      </div>
    );
  }
}
