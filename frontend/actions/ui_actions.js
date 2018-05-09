export const OPEN_NOTEBOOKS_MODAL = 'OPEN_NOTEBOOKS_MODAL';
export const CLOSE_NOTEBOOKS_MODAL = 'CLOSE_NOTEBOOKS_MODAL';
export const OPEN_TAGS_MODAL = 'OPEN_TAGS_MODAL';
export const CLOSE_TAGS_MODAL = 'CLOSE_TAGS_MODAL';

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
