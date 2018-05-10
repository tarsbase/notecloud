import { connect } from 'react-redux';
import Notes from './notes';
import { closeNotebooksModal, closeTagsModal } from "../../actions/ui_actions";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
  tagsModalIsOpen: state.ui.tagsModalIsOpen
});

const mapDispatchToProps = dispatch => {
  return {
    closeNotebooksModal: () => dispatch(closeNotebooksModal()),
    closeTagsModal: () => dispatch(closeTagsModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
