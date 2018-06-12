import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { withRouter } from 'react-router-dom';
import { openDeleteModal } from '../../actions/ui_actions';
import { getAllNotebooks } from '../../actions/notebook_actions';
import { noteIndexSelector } from '../../selectors/note_index_selectors';

const mapStateToProps = (state, ownProps) => {
  const { getArg, headerTitle } = noteIndexSelector(ownProps, state);
  return {
    notes: Object.values(state.notes),
    deleteModalIsOpen: state.ui.deleteModalIsOpen,
    getArg,
    headerTitle
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { getAction, getRelatedAction } = noteIndexSelector(ownProps);
  return {
    getAction: id => dispatch(getAction(id)),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity)),
    getRelatedAction: id => dispatch(getRelatedAction(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteIndex)
);
