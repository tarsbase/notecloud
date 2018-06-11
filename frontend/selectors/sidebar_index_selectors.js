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
  let closeModal;
  let modalIsOpen;
  if (ownProps.type === 'notebooks') {
    if (state) {
      entities = Object.values(state.notebooks);
      modalIsOpen = state.ui.notebooksModalIsOpen;
    }
    fetchAction = getAllNotebooks;
    createAction = createNotebook;
    closeModal = closeNotebooksModal;
  } else {
    if (state) {
      entities = Object.values(state.tags);
      modalIsOpen = state.ui.tagsModalIsOpen;
    }
    fetchAction = getAllTags;
    createAction = createTag;
    closeModal = closeTagsModal;
  }
  return { entities, fetchAction, createAction, closeModal, modalIsOpen };
};
