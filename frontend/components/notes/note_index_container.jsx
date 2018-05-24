import { connect } from 'react-redux';
import NoteIndex from './note_index';
import {
  getAllNotes
} from '../../actions/note_actions';
import { openDeleteModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: Object.values(state.notes),
  deleteModalIsOpen: state.ui.deleteModalIsOpen,
  noteIndexIsVisible: state.ui.noteIndexIsVisible,
  tooltipHidden: state.ui.tooltipHidden
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllNotes: () => dispatch(getAllNotes()),
  openDeleteModal: (entityType, entity) =>
    dispatch(openDeleteModal(entityType, entity))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
