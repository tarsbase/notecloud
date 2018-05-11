import { connect } from 'react-redux';
import Notes from './notes';
import { closeNotebooksModal, closeTagsModal } from "../../actions/ui_actions";
import { getAllNotes } from '../../actions/note_actions';
import { getAllNotebooks } from '../../actions/notebook_actions';
import { getAllTags } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
  tagsModalIsOpen: state.ui.tagsModalIsOpen
});

const mapDispatchToProps = dispatch => {
  return {
    closeNotebooksModal: () => dispatch(closeNotebooksModal()),
    closeTagsModal: () => dispatch(closeTagsModal()),
    getAllNotes: () => dispatch(getAllNotes()),
    getAllNotebooks: () => dispatch(getAllNotebooks()),
    getAllTags: () => dispatch(getAllTags())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
