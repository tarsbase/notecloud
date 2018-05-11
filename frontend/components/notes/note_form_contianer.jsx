import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import {
  createNote,
  updateNote,
  getAllNotes
} from '../../actions/note_actions';

const selectNote = (state, ownProps) => {
  let note;
  if (ownProps.match.params.noteId) {
    note = state.notes[ownProps.match.params.noteId];
  } else {
    const mostRecentNote = Object.values(state.notes).sort( (a, b) => {
      a = new Date(a.updated_at);
      b = new Date(b.updated_at);
      return b - a;
    })[0];
    note = mostRecentNote;
  }
  return note;
};

const mapStateToProps = (state, ownProps) => {
  const note = selectNote(state, ownProps);
  return { note };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let noteAction;
  if (ownProps.match.path === '/notes/:noteId') {
    noteAction = updateNote;
  } else {
    noteAction = createNote;
  }

  return { 
    noteAction: note => dispatch(noteAction(note)),
    getAllNotes: () => dispatch(getAllNotes())
   };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteForm)
);
