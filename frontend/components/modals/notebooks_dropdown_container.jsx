import { connect } from 'react-redux';
import NotebooksDropdown from './notebooks_dropdown';
import { updateNote } from '../../actions/note_actions';
import {
  setCurrentNotebook,
  closeNotebooksDropdown
} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  notebooks: Object.values(state.notebooks),
  note: ownProps.note,
  currentNotebook: ownProps.currentNotebook,
  notebooksDropdownIsOpen: state.ui.notebooksDropdownIsOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNote: note => dispatch(updateNote(note)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook)),
  closeNotebooksDropdown: () => dispatch(closeNotebooksDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksDropdown);
