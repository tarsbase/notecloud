export const OPEN_NOTEBOOKS_MODAL = 'OPEN_NOTEBOOKS_MODAL';
export const CLOSE_NOTEBOOKS_MODAL = 'CLOSE_NOTEBOOKS_MODAL';
export const OPEN_TAGS_MODAL = 'OPEN_TAGS_MODAL';
export const CLOSE_TAGS_MODAL = 'CLOSE_TAGS_MODAL';
export const SHOW_TOOLTIP = 'SHOW_TOOLTIP';
export const HIDE_TOOLTIP = 'HIDE_TOOLTIP';
export const OPEN_FS_MODAL = 'OPEN_FS_MODAL';
export const CLOSE_FS_MODAL = 'CLOSE_FS_MODAL';

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

export const showTooltip = () => ({
  type: SHOW_TOOLTIP
});

export const hideTooltip = () => ({
  type: HIDE_TOOLTIP
});

export const openFsModal = () => ({
  type: OPEN_FS_MODAL
});

export const closeFsModal = () => ({
  type: CLOSE_FS_MODAL
});