// export const TOGGLE_SIDEBAR_MODAL = 'TOGGLE_SIDEBAR_MODAL';
export const OPEN_SIDEBAR_MODAL = 'OPEN_SIDEBAR_MODAL';
export const CLOSE_SIDEBAR_MODAL = 'CLOSE_SIDEBAR_MODAL';
export const SIDEBAR_MODAL_COMPONENT = 'SIDEBAR_MODAL_COMPONENT';

// export const toggleSidebarModal = () => ({
//   type: TOGGLE_SIDEBAR_MODAL
// });

export const openSidebarModal = () => ({
  type: OPEN_SIDEBAR_MODAL
});

export const closeSidebarModal = () => ({
  type: CLOSE_SIDEBAR_MODAL
});

export const sidebarModalComponent = componentName => ({
  type: SIDEBAR_MODAL_COMPONENT,
  componentName
});