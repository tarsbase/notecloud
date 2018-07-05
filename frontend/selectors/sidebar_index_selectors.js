import {
  getAllNotebooks,
  getSearchNotebooks,
  createNotebook
} from '../actions/notebook_actions';
import {
  getAllTags,
  getSearchTags,
  createTag
} from '../actions/tag_actions';
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
  } else if (ownProps.type === 'tags'){
    if (state) {
      entities = Object.values(state.tags);
      modalIsOpen = state.ui.tagsModalIsOpen;
    }
    if (ownProps.location.search) {
      fetchAction = getSearchTags;
      const parsed = queryString.parse(ownProps.location.search);
      fetchActionArg = parsed.search;
    } else {
      fetchAction = getAllTags;
      fetchActionArg = null;
    }
    createAction = createTag;
    closeModal = closeTagsModal;
  } else {
    entities = [];
    fetchAction = () => ({type: ''});
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
