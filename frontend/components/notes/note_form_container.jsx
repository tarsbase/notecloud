import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { selectState, selectAction } from '../../selectors/note_form_selectors';
import {
  openDeleteModal,
  toggleNotebooksDropdown
} from '../../actions/ui_actions';
import { updateNote, getNote } from '../../actions/note_actions';
import { tagNote } from '../../actions/tagging_actions';
import { openBannerModal } from '../../actions/ui_actions';
import { getNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  const note = selectState(state, ownProps);
  return {
    note,
    notebooksDropdownIsOpen: state.ui.notebooksDropdownIsOpen
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = selectAction(ownProps);
  return {
    action: note => dispatch(action(note)),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity)),
    toggleNotebooksDropdown: () => dispatch(toggleNotebooksDropdown()),
    updateNote: note => dispatch(updateNote(note)),
    getNote: id => dispatch(getNote(id)),
    tagNote: (tag, note) => dispatch(tagNote(tag, note)),
    openBannerModal: msg => dispatch(openBannerModal(msg)),
    getNotebooks: (page, actionType, options) =>
      dispatch(getNotebooks(page, actionType, options))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteForm)
);
