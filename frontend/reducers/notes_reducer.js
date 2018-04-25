import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';

const NotesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      newState[action.note.id] = action.note;
      return newState;
    case REMOVE_NOTE:
      delete newState[action.note.id];
      return newState;
    default:
      return oldState;
  }
};

export default NotesReducer;