import {
  getAllNotebooks,
  createNotebook,
  deleteNotebook
} from '../actions/notebook_actions';
import { getAllTags, createTag, deleteTag } from '../actions/tag_actions';
import { closeNotebooksModal, closeTagsModal } from '../actions/ui_actions';

export const sidebarIndexSelector = (state, ownProps) => {
  let entities;
  let fetchAction;
  let createAction;
  let deleteAction;
  let closeModal;
  if (ownProps.type === 'notebooks') {
    if (state) {
      entities = Object.values(state.notebooks);
    }
    fetchAction = getAllNotebooks;
    createAction = createNotebook;
    deleteAction = deleteNotebook;
    closeModal = closeNotebooksModal;
  } else {
    if (state) {
      entities = Object.values(state.tags);
    }
    fetchAction = getAllTags;
    createAction = createTag;
    deleteAction = deleteTag;
    closeModal = closeTagsModal;
  }
  return { entities, fetchAction, createAction, deleteAction, closeModal };
};
