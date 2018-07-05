import {
  getNotesAndConcat,
  getNotesAndReplace,
  getNotesByNotebookIdAndConcat,
  getNotesByNotebookIdAndReplace,
  getNotesByTagIdAndConcat,
  getNotesByTagIdAndReplace
} from '../actions/note_actions';
import { getNotebook } from '../actions/notebook_actions';
import { getTag } from '../actions/tag_actions';

export const noteIndexSelector = (ownProps, state) => {
  let notes;
  let getArg;
  let headerTitle;
  let getAndReplace;
  let getAndConcat;
  let getRelatedAction;
  if (ownProps.match.params.notebookId) {
    getArg = ownProps.match.params.notebookId;
    getAndConcat = getNotesByNotebookIdAndConcat;
    getAndReplace = getNotesByNotebookIdAndReplace;
    getRelatedAction = getNotebook;
    if (state) {
      if (state.notebooks[ownProps.match.params.notebookId]) {
        headerTitle = state.notebooks[ownProps.match.params.notebookId].name;
      } 
    }
  } else if (ownProps.match.params.tagId) {
    getArg = ownProps.match.params.tagId;
    getAndConcat = getNotesByTagIdAndConcat;
    getAndReplace = getNotesByTagIdAndReplace;
    getRelatedAction = getTag;
    if (state) {
      if (state.tags[ownProps.match.params.tagId]) {
        headerTitle = state.tags[ownProps.match.params.tagId].name;
      }
    }
  } else {
    getArg = null;
    headerTitle = 'NOTES';
    getAndConcat = getNotesAndConcat;
    getAndReplace = getNotesAndReplace;
    getRelatedAction = (id) => ({type: ''});
  }
  if (state) {
    notes = Object.values(state.notes).sort((a,b) => {
      const aDate = new Date(a.created_at);
      const bDate = new Date(b.created_at);
      return bDate - aDate;
    });
  }
  return { getArg, headerTitle, getAndConcat, getRelatedAction, notes, getAndReplace };
};
