import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { selectState, selectAction } from '../../selectors/note_form_selectors';
import { openDeleteModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const {note, currentNotebook } = selectState(state, ownProps);
  return { note, currentNotebook };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = selectAction(ownProps);
  return {
    action: note => dispatch(action(note)),
    openDeleteModal: (entityType, entity) => dispatch(openDeleteModal(entityType, entity))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteForm)
);
