import { connect } from 'react-redux';
import {
  getAllNotebooks,
  deleteNotebook
} from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';
import { openDeleteModal, closeNotebooksModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  notebooks: Object.values(state.notebooks)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  openDeleteModal: (entityType, entity) => dispatch(openDeleteModal(entityType, entity)),
  closeNotebooksModal: () => dispatch(closeNotebooksModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);
