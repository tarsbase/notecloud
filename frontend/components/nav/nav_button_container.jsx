import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavButton from './nav_button';
import { navButtonSelector } from '../../selectors/nav_button_selectors';
import { showTooltip, hideTooltip } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const { classes, type, linkPath } = navButtonSelector(ownProps);
  return {
    notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
    tagsModalIsOpen: state.ui.tagsModalIsOpen,
    classes,
    type,
    linkPath
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { action } = navButtonSelector(ownProps);
  return {
    action: () => dispatch(action()),
    showTooltip: () => dispatch(showTooltip()),
    hideTooltip: () => dispatch(hideTooltip())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavButton)
);
