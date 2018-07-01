import {
  OPEN_NOTEBOOKS_MODAL,
  CLOSE_NOTEBOOKS_MODAL,
  OPEN_TAGS_MODAL,
  CLOSE_TAGS_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  TOGGLE_NOTEBOOKS_DROPDOWN,
  CLOSE_NOTEBOOKS_DROPDOWN,
  SET_CURRENT_NOTEBOOK,
  OPEN_BANNER_MODAL,
  CLOSE_BANNER_MODAL,
  SHOW_LOADING_SPINNER,
  HIDE_LOADING_SPINNER
} from '../actions/ui_actions';

import { 
  RECEIVE_NOTES_AND_CONCAT,
  RECEIVE_NOTES_AND_REPLACE
} from '../actions/note_actions';

const defaultState = {
  notebooksModalIsOpen: false,
  tagsModalIsOpen: false,
  delteModalIsOpen: false,
  deleteEntityType: null,
  deleteEntity: null,
  notebooksDropdownIsOpen: false,
  currentNotebook: null,
  bannerModalIsOpen: false,
  bannerModalMsg: '',
  loadingSpinnerIsVisible: false,
  noteCount: 0
};

const UIReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case OPEN_NOTEBOOKS_MODAL:
      newState.tagsModalIsOpen = false;
      newState.notebooksModalIsOpen = true;
      return newState;
    case CLOSE_NOTEBOOKS_MODAL:
      newState.notebooksModalIsOpen = false;
      return newState;
    case OPEN_TAGS_MODAL:
      newState.notebooksModalIsOpen = false;
      newState.tagsModalIsOpen = true;
      return newState;
    case CLOSE_TAGS_MODAL:
      newState.tagsModalIsOpen = false;
      return newState;
    case OPEN_DELETE_MODAL:
      newState.deleteModalIsOpen = true;
      newState.deleteEntity = action.entity;
      newState.deleteEntityType = action.entityType;
      return newState;
    case CLOSE_DELETE_MODAL:
      newState.deleteModalIsOpen = false;
      newState.deleteEntity = null;
      newState.deleteEntityType = null;
      return newState;
    case TOGGLE_NOTEBOOKS_DROPDOWN:
      newState.notebooksDropdownIsOpen = !newState.notebooksDropdownIsOpen;
      return newState;
    case CLOSE_NOTEBOOKS_DROPDOWN:
      newState.notebooksDropdownIsOpen = false;
      return newState;
    case SET_CURRENT_NOTEBOOK:
      newState.currentNotebook = action.notebook;
      return newState;
    case OPEN_BANNER_MODAL:
      newState.bannerModalIsOpen = true;
      newState.bannerModalMsg = action.msg;
      return newState;
    case CLOSE_BANNER_MODAL:
      newState.bannerModalIsOpen = false;
      newState.bannerModalMsg = '';
      return newState;
    case SHOW_LOADING_SPINNER:
      newState.loadingSpinnerIsVisible = true;
      return newState;
    case HIDE_LOADING_SPINNER:
      newState.loadingSpinnerIsVisible = false;
      return newState;
    case RECEIVE_NOTES_AND_CONCAT:
    case RECEIVE_NOTES_AND_REPLACE:
      newState.noteCount = action.notes.note_count;
      return newState;
    default:
      return oldState;
  }
};

export default UIReducer;
