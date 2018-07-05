import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notes from './notes';
import {
  closeNotebooksModal,
  closeTagsModal,
  openNotebooksModal,
  openTagsModal,
  closeShortcutsModal,
  openShortcutsModal
} from '../../actions/ui_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
    tagsModalIsOpen: state.ui.tagsModalIsOpen,
    shortcutsModalIsOpen: state.ui.shortcutsModalIsOpen,
    deleteEntityType: state.ui.deleteEntityType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let openModal = null;
  if (ownProps.location.pathname === '/notebooks') {
    openModal = () => dispatch(openNotebooksModal());
  } else if (ownProps.location.pathname === '/tags') {
    openModal = () => dispatch(openTagsModal());
  } else if (ownProps.location.pathname === '/shortcuts') {
    openModal = () => dispatch(openShortcutsModal());
  }
  return {
    closeNotebooksModal: () => dispatch(closeNotebooksModal()),
    closeTagsModal: () => dispatch(closeTagsModal()),
    closeShortcutsModal: () => dispatch(closeShortcutsModal()),
    openModal
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notes));
