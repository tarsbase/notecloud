import { connect } from 'react-redux';
import NavButton from './nav_button';
import { logout } from '../../actions/session_actions';
import {
  openNotebooksModal,
  closeNotebooksModal,
  openTagsModal,
  closeTagsModal
} from '../../actions/ui_actions';

const getButtonInfo = ownProps => {
  const classes = ['fa', 'nav-icon'];
  let type;
  switch (ownProps.type) {
    case 'newNote':
      ['fa-plus-circle', 'fa-2x'].forEach(selector => classes.push(selector));
      type = 'New Note';
      break;
    case 'notes':
      classes.push('fa-sticky-note');
      type = 'Notes';
      break;
    case 'notebooks':
      classes.push('fa-book');
      type = 'Notebooks';
      break;
    case 'tags':
      classes.push('fa-tag');
      type = 'Tags';
      break;
    case 'logout':
      classes.push('fa-sign-out');
      type = 'Logout';
      break;
    default:
      break;
  }
  return { classes, type };
};

const mapStateToProps = (state, ownProps) => {
  const { classes, type } = getButtonInfo(ownProps);
  return {
    notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
    tagsModalIsOpen: state.ui.tagsModalIsOpen,
    classes,
    type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    openNotebooksModal: () => dispatch(openNotebooksModal()),
    closeNotebooksModal: () => dispatch(closeNotebooksModal()),
    openTagsModal: () => dispatch(openTagsModal()),
    closeTagsModal: () => dispatch(closeTagsModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
