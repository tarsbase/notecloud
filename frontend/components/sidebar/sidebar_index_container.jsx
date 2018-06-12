import { connect } from 'react-redux';
import SidebarIndex from './sidebar_index';
import { withRouter } from 'react-router-dom';
import { sidebarIndexSelector } from '../../selectors/sidebar_index_selectors';
import { openDeleteModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const { entities, modalIsOpen, fetchActionArg } = sidebarIndexSelector(state, ownProps);
  return {
    type: ownProps.type,
    entities,
    modalIsOpen,
    fetchActionArg
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { fetchAction, createAction, closeModal } = sidebarIndexSelector(
    null,
    ownProps
  );
  return {
    fetchAction: fetchActionArg => dispatch(fetchAction(fetchActionArg)),
    createAction: entityName => dispatch(createAction(entityName)),
    closeModal: () => dispatch(closeModal()),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SidebarIndex)
);
