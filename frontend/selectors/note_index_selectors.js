import { getAllNotes, getNotesByNotebookId } from '../actions/note_actions';

export const noteIndexSelector = (ownProps, state) => {
  let getArg;
  let headerTitle;
  let getAction;
  let getNotebookAction;
  if (ownProps.match.params.notebookId) {
    getArg = ownProps.match.params.notebookId;
    getAction = getNotesByNotebookId;
    if (state) {
      headerTitle = state.notebooks[ownProps.match.params.notebookId].name;
    }
  } else {
    getArg = null;
    headerTitle = 'NOTES';
    getAction = getAllNotes;
  }
  return { getArg, headerTitle, getAction, getNotebookAction };
};