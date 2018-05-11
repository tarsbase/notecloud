import { getAllNotebooks } from '../actions/notebook_actions';
import { getAllTags } from '../actions/tag_actions';

export const sidebarIndexSelector = (state, ownProps) => {
  let entities;
  let fetchAction;
  if (ownProps.type === 'notebooks') {
    if (state) {
      entities = Object.values(state.notebooks);
    }
    fetchAction = getAllNotebooks;
  } else {
    if (state) {
      entities = Object.values(state.tags);
    }
    fetchAction = getAllTags;
  }
  return { entities, fetchAction };
};
