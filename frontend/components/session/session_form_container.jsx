import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname === '/login' ? 'login' : 'signup';
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType
  };
};

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
