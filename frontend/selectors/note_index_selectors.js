import {
  getNotes,
} from '../actions/note_actions';
import { getNotebook } from '../actions/notebook_actions';
import { getTag } from '../actions/tag_actions';

export const noteIndexSelector = (ownProps, state) => {
  let notes;
  let headerTitle;
  let getRelatedAction;
  const getAction = getNotes;
  const getOptions = {};
  if (ownProps.match.params.notebookId) {
    getOptions.notebookId = ownProps.match.params.notebookId;
    getRelatedAction = getNotebook;
    if (state) {
      if (state.notebooks[ownProps.match.params.notebookId]) {
        headerTitle = state.notebooks[ownProps.match.params.notebookId].name;
      } 
    }
  } else if (ownProps.match.params.tagId) {
    getOptions.tagId = ownProps.match.params.tagId;
    getRelatedAction = getTag;
    if (state) {
      if (state.tags[ownProps.match.params.tagId]) {
        headerTitle = state.tags[ownProps.match.params.tagId].name;
      }
    }
  } else {
    headerTitle = 'NOTES';
    getRelatedAction = (id) => ({type: ''});
  }
  if (state) {
    notes = Object.values(state.notes).sort((a,b) => {
      const aDate = new Date(a.created_at);
      const bDate = new Date(b.created_at);
      return bDate - aDate;
    });
  }
  return { headerTitle, getAction, getOptions, getRelatedAction, notes };
};
