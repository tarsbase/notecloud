import { connect } from 'react-redux';
import NavButton from './nav_button';
import { logout } from '../../actions/session_actions';

const getButtonInfo = ownProps => {
  const classes = ['fa', 'nav-icon'];
  let tooltipText;
  let action = () => {};
  switch (ownProps.type) {
    case 'newNote':
      ['fa-plus-circle', 'fa-2x'].forEach(selector => classes.push(selector));
      tooltipText = 'NEW NOTE';
      break;
    case 'notes':
      classes.push('fa-sticky-note');
      tooltipText = 'NOTES';
      break;
    case 'notebooks':
      classes.push('fa-book');
      tooltipText = 'NOTEBOOKS';
      break;
    case 'tags':
      classes.push('fa-tag');
      tooltipText = 'TAGS';
      break;
    case 'logout':
      classes.push('fa-sign-out');
      tooltipText = 'LOGOUT';
      action = logout;
      break;
    default:
      break;
  }
  return { action, classes, tooltipText };
};

const mapStateToProps = (state, ownProps) => {
  const { classes, tooltipText } = getButtonInfo(ownProps);
  return { classes, tooltipText };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { action } = getButtonInfo(ownProps);
  return { action: () => dispatch(action()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
