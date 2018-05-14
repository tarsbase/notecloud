import { connect } from 'react-redux';
import NoteIndex from './note_index';
import {
  deleteNote,
  getAllNotes
} from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: Object.values(state.notes),
  deleteModalIsOpen: state.ui.deleteModalIsOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllNotes: () => dispatch(getAllNotes()),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
