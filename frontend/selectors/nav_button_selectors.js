import {
  openNotebooksModal,
  closeNotebooksModal,
  openTagsModal,
  closeTagsModal
} from '../actions/ui_actions';
import { logout } from '../actions/session_actions';

export const navButtonSelector = ownProps => {
  const classes = ['fa', 'nav-icon'];
  let action = () => ({ type: null });
  let type;
  switch (ownProps.type) {
    case 'newNote':
      ['fa-plus-circle', 'fa-2x'].forEach(selector => classes.push(selector));
      type = 'New Note';
      break;
    case 'notes':
      classes.push('fa-sticky-note');
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
      if (ownProps.notebooksModalIsOpen) {
        action = closeNotebooksModal;
      } else {
        action = openNotebooksModal;
      }
      type = 'Notebooks';
      break;
    case 'tags':
      classes.push('fa-tag');
      if (ownProps.tagsModalIsOpen) {
        action = closeTagsModal;
      } else {
        action = openTagsModal;
      }
      type = 'Tags';
      break;
    case 'logout':
      classes.push('fa-sign-out');
      type = 'Logout';
      action = logout;
      break;
    default:
      break;
  }
  return { classes, type, action };
};
