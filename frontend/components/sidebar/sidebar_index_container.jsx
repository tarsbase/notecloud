import { connect } from 'react-redux';
import SidebarIndex from './sidebar_index';
import { withRouter } from 'react-router-dom';
import { sidebarIndexSelector } from '../../selectors/sidebar_index_selectors';
import { openDeleteModal, openBannerModal } from '../../actions/ui_actions';
import { updateNote } from '../../actions/note_actions.js';

const mapStateToProps = (state, ownProps) => {
  const { entities, modalIsOpen, getOptions, entityCount } = sidebarIndexSelector(
    state,
    ownProps
  );
  return {
    type: ownProps.type,
    loadingSpinnerIsVisible: state.ui.loadingSpinnerIsVisible,
    entities,
    modalIsOpen,
    getOptions,
    entityCount
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { fetchAction, createAction, closeModal } = sidebarIndexSelector(
    null,
    ownProps
  );
  return {
    fetchAction: (page, actionType, searchTerm) =>
      dispatch(fetchAction(page, actionType, searchTerm)),
    createAction: entityName => dispatch(createAction(entityName)),
    closeModal: () => dispatch(closeModal()),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity)),
    openBannerModal: msg => dispatch(openBannerModal(msg)),
    updateNote: (note, remove) => dispatch(updateNote(note, remove))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SidebarIndex)
);
