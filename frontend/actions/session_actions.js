import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch =>
  SessionApiUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err))
  );

export const logout = () => dispatch =>
  SessionApiUtil.logout().then(
    currentUser => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveErrors(err))
  );

export const signup = user => dispatch =>
  SessionApiUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err))
  );
