import { OPEN_SIDEBAR_MODAL, CLOSE_SIDEBAR_MODAL } from '../actions/ui_actions';

const defaultState = { sidebarModalIsOpen: false };

const UIReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case OPEN_SIDEBAR_MODAL: 
      newState.sidebarModalIsOpen = true;
      return newState;
    case CLOSE_SIDEBAR_MODAL: 
      newState.sidebarModalIsOpen = false;
      return newState;
    default: 
      return oldState;
  }
};

export default UIReducer;