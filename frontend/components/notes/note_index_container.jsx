import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { withRouter } from 'react-router-dom';
import {
  openDeleteModal,
  showLoadingSpinner,
  hideLoadingSpinner
} from '../../actions/ui_actions';
import { noteIndexSelector } from '../../selectors/note_index_selectors';

const mapStateToProps = (state, ownProps) => {
  const { getArg, headerTitle, notes } = noteIndexSelector(ownProps, state);
  return {
    deleteModalIsOpen: state.ui.deleteModalIsOpen,
    getArg,
    headerTitle,
    notes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { getAction, getRelatedAction } = noteIndexSelector(ownProps);
  return {
    getAction: (pageNum, id) => dispatch(getAction(pageNum, id)),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity)),
    getRelatedAction: id => dispatch(getRelatedAction(id)),
    showLoadingSpinner: () => dispatch(showLoadingSpinner()),
    hideLoadingSpinner: () => dispatch(hideLoadingSpinner())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteIndex)
);
