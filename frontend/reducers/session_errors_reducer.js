import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const SessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS: 
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;