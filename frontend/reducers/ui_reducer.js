import {
  OPEN_SIDEBAR_MODAL,
  CLOSE_SIDEBAR_MODAL,
  SIDEBAR_MODAL_COMPONENT
} from '../actions/ui_actions';

const defaultState = { sidebarModalIsOpen: false, sidebarModalComponent: null };

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
    case SIDEBAR_MODAL_COMPONENT:
      newState.sidebarModalComponent = action.componentName;
      return newState;
    default:
      return oldState;
  }
};

export default UIReducer;
