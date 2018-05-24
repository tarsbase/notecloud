import {
  OPEN_NOTEBOOKS_MODAL,
  CLOSE_NOTEBOOKS_MODAL,
  OPEN_TAGS_MODAL,
  CLOSE_TAGS_MODAL,
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL
} from '../actions/ui_actions';

const defaultState = {
  notebooksModalIsOpen: false,
  tagsModalIsOpen: false,
  tooltipHidden: true,
  delteModalIsOpen: false,
  deleteEntityType: null,
  deleteEntity: null
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
    case SHOW_TOOLTIP:
      newState.tooltipHidden = false;
      return newState;
    case HIDE_TOOLTIP:
      newState.tooltipHidden = true;
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
    default:
      return oldState;
  }
};

export default UIReducer;
