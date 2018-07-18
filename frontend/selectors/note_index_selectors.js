import {
  getNotes,
  getNotesByNotebookId,
  getNotesByTagId,
} from '../actions/note_actions';
import { getNotebook } from '../actions/notebook_actions';
import { getTag } from '../actions/tag_actions';

export const noteIndexSelector = (ownProps, state) => {
  let notes;
  let getArg;
  let headerTitle;
  let getAction;
  let getRelatedAction;
  if (ownProps.match.params.notebookId) {
    getArg = ownProps.match.params.notebookId;
    getAction = getNotesByNotebookId;
    getRelatedAction = getNotebook;
    if (state) {
      if (state.notebooks[ownProps.match.params.notebookId]) {
        headerTitle = state.notebooks[ownProps.match.params.notebookId].name;
      } 
    }
  } else if (ownProps.match.params.tagId) {
    getArg = ownProps.match.params.tagId;
    getAction = getNotesByTagId;
    getRelatedAction = getTag;
    if (state) {
      if (state.tags[ownProps.match.params.tagId]) {
        headerTitle = state.tags[ownProps.match.params.tagId].name;
      }
    }
  } else {
    getArg = null;
    headerTitle = 'NOTES';
    getAction = getNotes;
    getRelatedAction = (id) => ({type: ''});
  }
  if (state) {
    notes = Object.values(state.notes).sort((a,b) => {
      const aDate = new Date(a.created_at);
      const bDate = new Date(b.created_at);
      return bDate - aDate;
    });
  }
  return { getArg, headerTitle, getAction, getRelatedAction, notes };
};
