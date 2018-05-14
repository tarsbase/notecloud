import * as NotebookApiUtil from '../util/noptebook_api_util';

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';

const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const getAllNotebooks = () => dispatch =>
  NotebookApiUtil.fetchAllNotebooks().then(notebooks =>
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
