import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { makeNewNote, modifyNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  let note;
  if (ownProps.match.path === '/notes/:noteId') {
    note = state.notes[ownProps.match.params.noteId];
  } else {
    note = { title: '', body: '' };
  }
  return { note };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let noteAction;
  if (ownProps.match.path === '/notes/:noteId') {
    noteAction = modifyNote;
  } else {
    noteAction = makeNewNote;
  }

  return { noteAction: note => dispatch(noteAction(note)) };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteForm)
);
