import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { sessionFormSelector } from '../../selectors/session_form_selectors';

const mapStateToProps = (state, ownProps) => {
  return sessionFormSelector(state, ownProps);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = ownProps.location.pathname === '/signup' ? signup : login;
  return {
    clearErrors: () => dispatch(clearErrors()),
    formAction: user => dispatch(formAction(user))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
