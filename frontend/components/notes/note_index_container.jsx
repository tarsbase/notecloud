import { connect } from 'react-redux';
import NoteIndex from './note_index';
import {
  deleteNote
} from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: Object.values(state.notes)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
