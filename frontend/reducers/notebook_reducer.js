import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS_AND_CONCAT,
  RECEIVE_NOTEBOOKS_AND_REPLACE
} from '../actions/notebook_actions';
import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const NotebookReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let notebook;
  const newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_NOTEBOOKS_AND_REPLACE:
    // case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOKS_AND_CONCAT:
      return Object.assign({}, newState, action.notebooks);
    case RECEIVE_NOTEBOOK:
      newState[action.notebook.id] = action.notebook;
      return newState;
    case REMOVE_NOTEBOOK:
      delete newState[action.notebook.id];
      return newState;
    case RECEIVE_NOTE:
      notebook = newState[action.note.notebook.id];
      if (notebook && !notebook.notes.includes(action.note.id)) {
        notebook.notes.push(action.note.id);
      }
      return newState;
    case REMOVE_NOTE:
      notebook = newState[action.note.notebook.id];
      const index = notebook.notes.indexOf(action.note.id);
      if (index > -1) {
        notebook.notes.splice(index, 1);
      }
      return newState;
    default:
      return oldState;
  }
};

export default NotebookReducer;
