import * as NotebookApiUtil from '../util/noptebook_api_util';
import { showLoadingSpinner, hideLoadingSpinner } from './ui_actions';

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_NOTEBOOKS_AND_REPLACE = 'RECEIVE_NOTEBOOKS_AND_REPLACE';
export const RECEIVE_NOTEBOOKS_AND_CONCAT = 'RECEIVE_NOTEBOOKS_AND_CONCAT';
export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';

const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

const receiveNotebooksAndReplace = notebooks => ({
  type: RECEIVE_NOTEBOOKS_AND_REPLACE,
  notebooks
});

const receiveNotebooksAndConcat = notebooks => ({
  type: RECEIVE_NOTEBOOKS_AND_CONCAT,
  notebooks
});

const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const getNotebooks = (page, actionType) => dispatch => {
  if (actionType === 'concat' && page > 1) {
    dispatch(showLoadingSpinner());
  }
  NotebookApiUtil.fetchNotebooks(page).then(notebooks => {
    if (actionType === 'replace') {
      dispatch(receiveNotebooksAndReplace(notebooks));
    } else {
      dispatch(receiveNotebooksAndConcat(notebooks));
      if (page > 1) {
        dispatch(hideLoadingSpinner());
      }
    }
  });
};

export const getAllNotebooks = () => dispatch =>
  NotebookApiUtil.fetchAllNotebooks().then(notebooks =>
    dispatch(receiveAllNotebooks(notebooks))
  );

export const getSearchNotebooks = searchTerm => dispatch =>
  NotebookApiUtil.fetchSearchNotebooks(searchTerm).then(notebooks =>
    dispatch(receiveAllNotebooks(notebooks))
  );

export const getNotebook = id => dispatch =>
  NotebookApiUtil.fetchNotebook(id).then(notebook =>
    dispatch(receiveNotebook(notebook))
  );

export const createNotebook = notebook => dispatch =>
  NotebookApiUtil.createNotebook(notebook).then(newNotebook =>
    dispatch(receiveNotebook(newNotebook))
  );

export const updateNotebook = notebook => dispatch =>
  NotebookApiUtil.updateNotebook(notebook).then(updatedNotebook =>
    dispatch(receiveNotebook(updatedNotebook))
  );

export const deleteNotebook = id => dispatch =>
  NotebookApiUtil.destroyNotebook(id).then(notebook =>
    dispatch(removeNotebook(notebook))
  );
