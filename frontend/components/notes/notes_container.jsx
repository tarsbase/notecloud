import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notes from './notes';
import {
  closeNotebooksModal,
  closeTagsModal,
  openNotebooksModal,
  openTagsModal
} from '../../actions/ui_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
    tagsModalIsOpen: state.ui.tagsModalIsOpen,
    deleteEntityType: state.ui.deleteEntityType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let openModal = null;
  if (ownProps.location.pathname === '/notebooks') {
    openModal = () => dispatch(openNotebooksModal());
  } else if (ownProps.location.pathname === '/tags') {
    openModal = () => dispatch(openTagsModal());
  }
  return {
    closeNotebooksModal: () => dispatch(closeNotebooksModal()),
    closeTagsModal: () => dispatch(closeTagsModal()),
    openModal
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notes));
