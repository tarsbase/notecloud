import { connect } from 'react-redux';
import NavButton from './nav_button';
import { logout } from '../../actions/session_actions';
import {
  openNotebooksModal,
  closeNotebooksModal,
  openTagsModal,
  closeTagsModal
} from '../../actions/ui_actions';

const navButtonSelector = (ownProps) => {
  const classes = ['fa', 'nav-icon'];
  let action = () => {};
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

const mapStateToProps = (state, ownProps) => {
  const { classes, type } = navButtonSelector(ownProps);
  return {
    notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
    tagsModalIsOpen: state.ui.tagsModalIsOpen,
    classes,
    type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { action } = navButtonSelector(ownProps);
  return {
    action: () => dispatch(action())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
