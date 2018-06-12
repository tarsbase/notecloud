import {
  OPEN_NOTEBOOKS_MODAL,
  CLOSE_NOTEBOOKS_MODAL,
  OPEN_TAGS_MODAL,
  CLOSE_TAGS_MODAL,
  OPEN_SIDEBAR_MODAL,
  CLOSE_SIDEBAR_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  OPEN_NOTEBOOKS_DROPDOWN,
  CLOSE_NOTEBOOKS_DROPDOWN,
  SET_CURRENT_NOTEBOOK,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL
} from '../actions/ui_actions';

const defaultState = {
  notebooksModalIsOpen: false,
  tagsModalIsOpen: false,
  delteModalIsOpen: false,
  deleteEntityType: null,
  deleteEntity: null,
  notebooksDropdownIsOpen: false,
  currentNotebook: null
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
    case OPEN_NOTEBOOKS_DROPDOWN:
      newState.notebooksDropdownIsOpen = true;
      return newState;
    case CLOSE_NOTEBOOKS_DROPDOWN:
      newState.notebooksDropdownIsOpen = false;
      return newState;
    case SET_CURRENT_NOTEBOOK:
      newState.currentNotebook = action.notebook;
      return newState;
    default:
      return oldState;
  }
};

export default UIReducer;
