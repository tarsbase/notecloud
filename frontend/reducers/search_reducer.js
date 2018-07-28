import { SET_SEARCH_TERM } from '../actions/search_actions';
import {
  RECEIVE_NOTES_AND_CONCAT,
  RECEIVE_NOTES_AND_REPLACE
} from '../actions/note_actions';
import {
  RECEIVE_NOTEBOOKS_AND_CONCAT,
  RECEIVE_NOTEBOOKS_AND_REPLACE
} from '../actions/notebook_actions';
import {
  RECEIVE_TAGS_AND_CONCAT,
  RECEIVE_TAGS_AND_REPLACE
} from '../actions/tag_actions';

const defaultState = { searchTerm: null, searchEntity: null };

const SearchReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case SET_SEARCH_TERM:
      newState.searchTerm = action.searchTerm;
      newState.searchEntity = action.searchEntity;
      return newState;
    case RECEIVE_NOTES_AND_CONCAT:
    case RECEIVE_NOTES_AND_REPLACE:
    case RECEIVE_NOTEBOOKS_AND_CONCAT:
    case RECEIVE_NOTEBOOKS_AND_REPLACE:
    case RECEIVE_TAGS_AND_CONCAT:
    case RECEIVE_TAGS_AND_REPLACE:
      newState.searchTerm = null;
      newState.searchEntity = null;
      return newState;
    default:
      return oldState;
  }
};

export default SearchReducer;