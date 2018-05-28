import {
  openNotebooksModal,
  closeNotebooksModal,
  openTagsModal,
  closeTagsModal,
  openSidebarModal,
  closeSidebarModal
} from '../actions/ui_actions';
import { logout } from '../actions/session_actions';

export const navButtonSelector = ownProps => {
  const classes = ['fa'];
  let action = () => ({ type: null });
  let type;
  let linkPath;
  switch (ownProps.type) {
    case 'new note':
      ['fa-plus-circle', 'fa-2x', 'new-note-link'].forEach(selector =>
        classes.push(selector)
      );
      type = "New Note";
      linkPath = '/notes';
      if (ownProps.notebooksModalIsOpen) {
        action = closeNotebooksModal;
      }
      if (ownProps.tagsModalIsOpen) {
        action = closeTagsModal;
      }
      break;
    case 'notes':
      classes.push('fa-sticky-note');
      classes.push('nav-icon');
      if (ownProps.notebooksModalIsOpen) {
        action = closeNotebooksModal;
      }
      if (ownProps.tagsModalIsOpen) {
        action = closeTagsModal;
      }
      linkPath = `/notes`;
      type = 'Notes';
      break;
    case 'notebooks':
      classes.push('fa-book');
      classes.push('nav-icon');
      if (ownProps.notebooksModalIsOpen) {
        action = closeNotebooksModal;
      } else {
        action = openNotebooksModal;
      }
      type = 'Notebooks';
      linkPath = '/notebooks';
      break;
    case 'tags':
      classes.push('fa-tag');
      classes.push('nav-icon');
      if (ownProps.tagsModalIsOpen) {
        action = closeTagsModal;
      } else {
        action = openTagsModal;
      }
      type = 'Tags';
      linkPath = '/tags';
      break;
    case 'logout':
      classes.push('fa-sign-out');
      classes.push('nav-icon');
      type = 'Logout';
      action = logout;
      linkPath = '/login';
      break;
    default:
      break;
  }
  return { classes, type, action, linkPath };
};
