import { connect } from 'react-redux';
import NoteIndex from './note_index';
import {
  getAllNotes,
  getNote,
  getNotesByNotebookId
} from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: Object.values(state.notes)
});