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
      type = 'New Note';
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
      linkPath = `/notes`;
      if (ownProps.notebooksModalIsOpen) {
        action = closeNotebooksModal;
      }
      if (ownProps.tagsModalIsOpen) {
        action = closeTagsModal;
      }
      type = 'Notes';
      break;
    case 'notebooks':
      classes.push('fa-book');
      classes.push('nav-icon');
      if (ownProps.notebooksModalIsOpen) {
        action = closeNotebooksModal;
        linkPath = '/notes';
      } else {
        action = openNotebooksModal;
        linkPath = '/notebooks';
      }
      type = 'Notebooks';
      break;
    case 'tags':
      classes.push('fa-tag');
      classes.push('nav-icon');
      if (ownProps.tagsModalIsOpen) {
        action = closeTagsModal;
        linkPath = '/notes';
      } else {
        action = openTagsModal;
        linkPath = '/tags';
      }
      type = 'Tags';
      break;
    case 'logout':
      ['fa-sign-out', 'nav-icon', 'logout-btn'].forEach(selector =>
        classes.push(selector)
      );
      type = 'Logout';
      action = logout;
      linkPath = '/login';
      break;
    default:
      break;
  }
  return { classes, type, action, linkPath };
};
