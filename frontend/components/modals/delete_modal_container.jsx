import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeleteModal from './delete_modal';
import { deleteModalSelector } from '../../selectors/delete_modal_selectors';
import { closeDeleteModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const { titleType } = deleteModalSelector(ownProps);
  return {
    deleteModalIsOpen: state.ui.deleteModalIsOpen,
    deleteEntity: state.ui.deleteEntity,
    titleType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { deleteAction } = deleteModalSelector(ownProps);
  return {
    deleteAction: entityId => dispatch(deleteAction(entityId)),
    closeDeleteModal: () => dispatch(closeDeleteModal())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeleteModal)
);
