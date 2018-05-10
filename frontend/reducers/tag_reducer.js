import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';

const TagReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      newState[action.tag.id] = action.tag;
      return newState;
    case REMOVE_TAG:
      delete newState[action.tag.id];
      return newState;
    default: 
      return oldState;
  }
};

export default TagReducer;