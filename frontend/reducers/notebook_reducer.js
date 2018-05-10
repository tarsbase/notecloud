import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';

const NotebookReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      newState[action.notebook.id] = action.notebook;
      return newState;
    case REMOVE_NOTEBOOK:
      delete newState[action.notebook.id];
      return newState;
    default:
      return oldState;
  }
};

export default NotebookReducer;
