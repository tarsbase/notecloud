import {
  getAllNotes,
  getNotesByNotebookId,
  getNotesByTagId,
} from '../actions/note_actions';
import { getAllNotebooks } from '../actions/notebook_actions';

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
  } else if (ownProps.match.params.tagId) {
    getArg = ownProps.match.params.tagId;
    getAction = getNotesByTagId;
    if (state) {
      headerTitle = state.tags[ownProps.match.params.tagId].name;
    }
  } else {
    getArg = null;
    headerTitle = 'NOTES';
    getAction = getAllNotes;
  }
  return { getArg, headerTitle, getAction, getNotebookAction };
};
