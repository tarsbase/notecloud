import * as TagApiUtil from '../util/tag_api_util';
import { showLoadingSpinner, hideLoadingSpinner } from './ui_actions';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const RECEIVE_TAG_NOTE = 'RECEIVE_TAG_NOTE';
export const RECEIVE_TAGS_AND_CONCAT = 'RECEIVE_TAGS_AND_CONCAT';
export const RECEIVE_TAGS_AND_REPLACE = 'RECEIVE_TAGS_AND_REPLACE';

const receiveTagsAndConcat = tags => ({
  type: RECEIVE_TAGS_AND_CONCAT,
  tags
});

const recevieTagsAndReplace = tags => ({
  type: RECEIVE_TAGS_AND_REPLACE,
  tags
});

const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const getTags = (page, actionType, searchTerm = null) => dispatch => {
  if (actionType === 'concat' && page > 1) {
    dispatch(showLoadingSpinner());
  } 
  TagApiUtil.fetchTags(page, searchTerm).then(tags => {
    if (actionType === 'replace') {
      dispatch(recevieTagsAndReplace(tags));
    } else {
      dispatch(receiveTagsAndConcat(tags));
      if (page > 1) {
        dispatch(hideLoadingSpinner());
      }
    }
  });
};

export const getTag = id => dispatch =>
  TagApiUtil.fetchTag(id).then(tag => dispatch(receiveTag(tag)));

export const createTag = tag => dispatch =>
  TagApiUtil.createTag(tag).then(newTag => dispatch(receiveTag(newTag)));

export const updateTag = tag => dispatch =>
  TagApiUtil.updateTag(tag).then(updatedTag =>
    dispatch(receiveTag(updatedTag))
  );

export const deleteTag = id => dispatch =>
  TagApiUtil.deleteTag(id).then(tag => dispatch(removeTag(tag)));
