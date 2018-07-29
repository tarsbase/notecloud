import { connect } from 'react-redux';
import NotebooksDropdown from './notebooks_dropdown';
import { updateNote, getNote } from '../../actions/note_actions';
import {
  setCurrentNotebook,
  closeNotebooksDropdown
} from '../../actions/ui_actions';
import { getNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  notebooks: Object.values(state.notebooks).sort((a, b) => {
    const aDate = new Date(a.updated_at);
    const bDate = new Date(b.updated_at);
    return bDate - aDate;
  }),
  note: ownProps.note,
  currentNotebook: ownProps.currentNotebook,
  notebooksDropdownIsOpen: state.ui.notebooksDropdownIsOpen,
  notebookCount: state.ui.notebookCount,
  loadingSpinnerIsVisible: state.ui.loadingSpinnerIsVisible
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNote: note => dispatch(updateNote(note)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook)),
  closeNotebooksDropdown: () => dispatch(closeNotebooksDropdown()),
  getNotebooks: (page, actionType, opts) => dispatch(getNotebooks(page, actionType, opts))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksDropdown);
