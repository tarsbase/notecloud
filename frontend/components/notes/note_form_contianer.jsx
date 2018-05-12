import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import {
  createNote,
  updateNote,
  getAllNotes,
  deleteNote
} from '../../actions/note_actions';
import { selectNote } from '../../selectors/note_form_selectors';

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
    getAllNotes: () => dispatch(getAllNotes()),
    deleteNote: id => dispatch(deleteNote(id))
   };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteForm)
);
