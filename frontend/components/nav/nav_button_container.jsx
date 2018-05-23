import { connect } from 'react-redux';
import NavButton from './nav_button';
import { navButtonSelector } from '../../selectors/nav_button_selectors';
import { showTooltip, hideTooltip } from '../../actions/ui_actions';
 
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
    action: () => dispatch(action()),
    showTooltip: () => dispatch(showTooltip()),
    hideTooltip: () => dispatch(hideTooltip())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
