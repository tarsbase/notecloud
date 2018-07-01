export const OPEN_NOTEBOOKS_MODAL = 'OPEN_NOTEBOOKS_MODAL';
export const CLOSE_NOTEBOOKS_MODAL = 'CLOSE_NOTEBOOKS_MODAL';
export const OPEN_TAGS_MODAL = 'OPEN_TAGS_MODAL';
export const CLOSE_TAGS_MODAL = 'CLOSE_TAGS_MODAL';
export const OPEN_DELETE_MODAL = 'OPEN_DELETE_MODAL';
export const CLOSE_DELETE_MODAL = 'CLOSE_DELETE_MODAL';
export const TOGGLE_NOTEBOOKS_DROPDOWN = 'TOGGLE_NOTEBOOKS_DROPDOWN';
export const CLOSE_NOTEBOOKS_DROPDOWN = 'CLOSE_NOTEBOOKS_DROPDOWN';
export const SET_CURRENT_NOTEBOOK = 'SET_CURRENT_NOTEBOOK';
export const OPEN_BANNER_MODAL = 'OPEN_BANNER_MODAL';
export const CLOSE_BANNER_MODAL = 'CLOSE_BANNER_MODAL'; 
export const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';
export const HIDE_LOADING_SPINNER = 'HIDE_LOADING_SPINNER';
 
export const openNotebooksModal = () => ({
  type: OPEN_NOTEBOOKS_MODAL
});

export const closeNotebooksModal = () => ({
  type: CLOSE_NOTEBOOKS_MODAL
});

export const openTagsModal = () => ({
  type: OPEN_TAGS_MODAL
});

export const closeTagsModal = () => ({
  type: CLOSE_TAGS_MODAL
});

export const openDeleteModal = (entityType, entity) => ({
  type: OPEN_DELETE_MODAL,
  entity,
  entityType
});

export const closeDeleteModal = () => ({
  type: CLOSE_DELETE_MODAL
});

export const toggleNotebooksDropdown = () => ({
  type: TOGGLE_NOTEBOOKS_DROPDOWN
});

export const closeNotebooksDropdown = () => ({
  type: CLOSE_NOTEBOOKS_DROPDOWN
});

export const setCurrentNotebook = (notebook) => ({
  type: SET_CURRENT_NOTEBOOK,
  notebook
});

export const openBannerModal = msg => ({
  type: OPEN_BANNER_MODAL,
  msg
});

export const closeBannerModal = () => ({
  type: CLOSE_BANNER_MODAL
});

export const showLoadingSpinner = () => ({
  type: SHOW_LOADING_SPINNER
});

export const hideLoadingSpinner = () => ({
  type: HIDE_LOADING_SPINNER
});