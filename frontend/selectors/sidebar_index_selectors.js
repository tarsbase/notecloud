import { getAllNotebooks, createNotebook } from '../actions/notebook_actions';
import { getAllTags, createTag } from '../actions/tag_actions';

export const sidebarIndexSelector = (state, ownProps) => {
  let entities;
  let fetchAction;
  let createAction;
  if (ownProps.type === 'notebooks') {
    if (state) {
      entities = Object.values(state.notebooks);
    }
    fetchAction = getAllNotebooks;
    createAction = createNotebook;
  } else {
    if (state) {
      entities = Object.values(state.tags);
    }
    fetchAction = getAllTags;
    createAction = createTag;
  }
  return { entities, fetchAction, createAction };
};
