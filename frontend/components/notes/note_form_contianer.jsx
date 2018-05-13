import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { deleteNote } from '../../actions/note_actions';
import { selectState, selectAction } from '../../selectors/note_form_selectors';

const mapStateToProps = (state, ownProps) => {
  const {note, currentNotebook } = selectState(state, ownProps);
  return { note, currentNotebook };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = selectAction(ownProps);
  return {
    action: note => dispatch(action(note)),
    deleteNote: id => dispatch(deleteNote(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteForm)
);
