import {
  getAllNotebooks,
  getSearchNotebooks,
  createNotebook
} from '../actions/notebook_actions';
import { getAllTags, getSearchTags, createTag } from '../actions/tag_actions';
import { getShortcutNotesAndReplace } from '../actions/note_actions';
import {
  closeNotebooksModal,
  closeTagsModal,
  closeShortcutsModal
} from '../actions/ui_actions';
const queryString = require('query-string');

export const sidebarIndexSelector = (state, ownProps) => {
  let entities;
  let fetchAction;
  let createAction;
  let closeModal;
  let modalIsOpen;
  let fetchActionArg;
  switch (ownProps.type) {
    case 'notebooks':
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
      break;
    case 'tags':
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
      break;
    case 'shortcuts':
      if (state) {
        entities = Object.values(state.notes);
        modalIsOpen = state.ui.shortcutsModalIsOpen;
      }
      closeModal = closeShortcutsModal;
      fetchAction = () => ({type: ''});
      break;
    default:
      break;
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
