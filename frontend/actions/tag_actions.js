import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
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

export const getAllTags = () => dispatch =>
  TagApiUtil.fetchAllTags().then(tags => dispatch(receiveAllTags(tags)));

export const getTag = id => dispatch =>
  TagApiUtil.fetchTag(id).then(tag => dispatch(receiveTag(tag)));

export const createTag = tag => dispatch =>
  TagApiUtil.createTag(tag).then(newTag => dispatch(receiveTag(newTag)));

export const updateTag = tag => dispatch =>
  TagApiUtil.updateTag(tag).then(updatedTag =>
    dispatch(receiveTag(updatedTag))
  );
