import {
  OPEN_NOTEBOOKS_MODAL,
  CLOSE_NOTEBOOKS_MODAL,
  OPEN_TAGS_MODAL,
  CLOSE_TAGS_MODAL
} from '../actions/ui_actions';

const defaultState = {
  notebooksModalIsOpen: false,
  tagsModalIsOpen: false,
  noteIndexIsVisible: true
};

const UIReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case OPEN_NOTEBOOKS_MODAL:
      newState.tagsModalIsOpen = false;
      newState.notebooksModalIsOpen = true;
      newState.noteIndexIsVisible = false;
      return newState;
      case CLOSE_NOTEBOOKS_MODAL:
      newState.notebooksModalIsOpen = false;
      newState.noteIndexIsVisible = true;
      return newState;
    case OPEN_TAGS_MODAL:
      newState.notebooksModalIsOpen = false;
      newState.tagsModalIsOpen = true;
      newState.noteIndexIsVisible = false;
      return newState;
    case CLOSE_TAGS_MODAL:
      newState.tagsModalIsOpen = false;
      newState.noteIndexIsVisible = true;
      return newState;
    default:
      return oldState;
  }
};

export default UIReducer;
