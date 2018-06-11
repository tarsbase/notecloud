import { connect } from 'react-redux';
import SidebarIndex from './sidebar_index';
import { sidebarIndexSelector } from '../../selectors/sidebar_index_selectors';
import { openDeleteModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const { entities, modalIsOpen } = sidebarIndexSelector(state, ownProps);
  return {
    type: ownProps.type,
    entities,
    modalIsOpen
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { fetchAction, createAction, closeModal } = sidebarIndexSelector(
    null,
    ownProps
  );
  return {
    fetchAction: () => dispatch(fetchAction()),
    createAction: entityName => dispatch(createAction(entityName)),
    closeModal: () => dispatch(closeModal()),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarIndex);
