import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { selectState, selectAction } from '../../selectors/note_form_selectors';
import {
  openDeleteModal,
  toggleNotebooksDropdown
} from '../../actions/ui_actions';
import { updateNote, getNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  const note = selectState(state, ownProps);
  return { note };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = selectAction(ownProps);
  return {
    action: note => dispatch(action(note)),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity)),
    toggleNotebooksDropdown: () => dispatch(toggleNotebooksDropdown()),
    updateNote: note => dispatch(updateNote(note)),
    getNote: id => dispatch(getNote(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteForm)
);
