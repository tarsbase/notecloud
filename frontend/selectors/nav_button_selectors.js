import {
  openNotebooksModal,
  closeNotebooksModal,
  openTagsModal,
  closeTagsModal
} from '../actions/ui_actions';
import { logout } from '../actions/session_actions';

export const navButtonSelector = ownProps => {
  const classes = ['fa'];
  let action = () => ({ type: null });
  let type;
  switch (ownProps.type) {
    case 'notes':
      classes.push('fa-sticky-note');
      classes.push('nav-icon');
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
      } else {
        action = openNotebooksModal;
      }
      type = 'Notebooks';
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
      break;
    case 'logout':
      classes.push('fa-sign-out');
      classes.push('nav-icon');
      type = 'Logout';
      action = logout;
      break;
    default:
      break;
  }
  return { classes, type, action };
};
