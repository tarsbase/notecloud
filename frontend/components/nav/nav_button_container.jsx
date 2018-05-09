import { connect } from 'react-redux';
import NavButton from './nav_button';
import { navButtonSelector } from '../../selectors/nav_button_selectors';

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
