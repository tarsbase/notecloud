import { TOGGLE_SIDEBAR_MODAL } from '../actions/ui_actions';

const defaultState = { modalIsOpen: false };

const UIReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case TOGGLE_SIDEBAR_MODAL: 
      newState.modalIsOpen = !newState.modalIsOpen;
      return newState;
    default: 
      return oldState;
  }
};

export default UIReducer;