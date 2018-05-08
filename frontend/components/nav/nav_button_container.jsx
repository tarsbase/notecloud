import { connect } from 'react-redux';
import NavButton from './nav_button';
import { logout } from '../../actions/session_actions';
import {
  openSidebarModal,
  closeSidebarModal,
  sidebarModalComponent
} from '../../actions/ui_actions';

const getButtonInfo = (ownProps, dispatch) => {
  const classes = ['fa', 'nav-icon'];
  let type;
  let action = () => {};
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
    sidebarModalIsOpen: state.ui.sidebarModalIsOpen,
    sidebarModalComponent: state.ui.sidebarModalComponent,
    classes,
    type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openSidebarModal: () => dispatch(openSidebarModal()),
    closeSidebarModal: () => dispatch(closeSidebarModal()),
    sidebarModalComponent: componentName =>
      dispatch(sidebarModalComponent(componentName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
