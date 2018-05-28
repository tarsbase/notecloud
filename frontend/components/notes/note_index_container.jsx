import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { withRouter } from 'react-router-dom';
import { getAllNotes, getNotesByNotebookId } from '../../actions/note_actions';
import { openDeleteModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let getArg;
  if (ownProps.match.params.notebookId) {
    getArg = ownProps.match.params.notebookId;
  } else {
    getArg = null;
  }
  return {
    notes: Object.values(state.notes),
    deleteModalIsOpen: state.ui.deleteModalIsOpen,
    tooltipHidden: state.ui.tooltipHidden,
    getArg
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let getAction;
  if (ownProps.match.params.notebookId) {
    getAction = getNotesByNotebookId;
  } else {
    getAction = getAllNotes;
  }
  return {
    getAction: id => dispatch(getAction(id)),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteIndex)
);
