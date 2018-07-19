import {
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_TAG_NOTE,
  RECEIVE_TAGS_AND_CONCAT,
  RECEIVE_TAGS_AND_REPLACE
} from '../actions/tag_actions';

const TagReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_TAGS_AND_REPLACE:
      return action.tags;
    case RECEIVE_TAGS_AND_CONCAT:
      return Object.assign({}, newState, action.tags);
    case RECEIVE_TAG:
    case RECEIVE_TAG_NOTE:
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