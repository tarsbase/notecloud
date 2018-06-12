import {
  getAllNotebooks,
  getSearchNotebooks,
  createNotebook,
  deleteNotebook
} from '../actions/notebook_actions';
import { getAllTags, createTag, deleteTag } from '../actions/tag_actions';
import { closeNotebooksModal, closeTagsModal } from '../actions/ui_actions';
const queryString = require('query-string');

export const sidebarIndexSelector = (state, ownProps) => {
  let entities;
  let fetchAction;
  let createAction;
  let closeModal;
  let modalIsOpen;
  let fetchActionArg;
  if (ownProps.type === 'notebooks') {
    if (state) {
      entities = Object.values(state.notebooks);
      modalIsOpen = state.ui.notebooksModalIsOpen;
    }
    if (ownProps.location.search) {
      fetchAction = getSearchNotebooks;
      const parsed = queryString.parse(ownProps.location.search);
      fetchActionArg = parsed.search;
    } else {
      fetchAction = getAllNotebooks;
      fetchActionArg = null;
    }
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
  return {
    entities,
    fetchAction,
    fetchActionArg,
    createAction,
    closeModal,
    modalIsOpen
  };
};
