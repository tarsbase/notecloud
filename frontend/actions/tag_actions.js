import * as TagApiUtil from '../util/tag_api_util';
import { receiveNote } from './note_actions';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const RECEIVE_TAG_NOTE = 'RECEIVE_TAG_NOTE';

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

const receivetagNote = res => ({
  type: RECEIVE_TAG_NOTE,
  tag: res.tag,
  note: res.note
});

export const getAllTags = () => dispatch =>
  TagApiUtil.fetchAllTags().then(tags => dispatch(receiveAllTags(tags)));

export const getSearchTags = searchTerm => dispatch =>
  TagApiUtil.fetchSearchTags(searchTerm).then(tags =>
    dispatch(receiveAllTags(tags))
  );

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
