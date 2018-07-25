import { getNotebooks, createNotebook } from '../actions/notebook_actions';
import { getTags, createTag } from '../actions/tag_actions';
import { getShortcutNotes } from '../actions/note_actions';
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
  let entityCount;
  switch (ownProps.type) {
    case 'notebooks':
      fetchAction = getNotebooks;
      if (state) {
        entities = Object.values(state.notebooks);
        modalIsOpen = state.ui.notebooksModalIsOpen;
        entityCount = state.ui.notebookCount;
      }
      createAction = createNotebook;
      closeModal = closeNotebooksModal;
      break;
    case 'tags':
      fetchAction = getTags;
      if (state) {
        entities = Object.values(state.tags);
        modalIsOpen = state.ui.tagsModalIsOpen;
        entityCount = state.ui.tagCount;
      }
      createAction = createTag;
      closeModal = closeTagsModal;
      break;
    case 'shortcuts':
      fetchAction = getShortcutNotes;
      if (state) {
        entities = Object.values(state.notes);
        modalIsOpen = state.ui.shortcutsModalIsOpen;
        entityCount = state.ui.noteCount;
      }
      closeModal = closeShortcutsModal;
      break;
    default:
      break;
  }
  let searchTerm;
  if (ownProps.location.search) {
    const parsed = queryString.parse(ownProps.location.search);
    searchTerm = parsed.search;
  } else {
    searchTerm = null;
  }
  return {
    entities,
    fetchAction,
    searchTerm,
    createAction,
    closeModal,
    modalIsOpen,
    entityCount
  };
};
