import { connect } from 'react-redux';
import Notes from './notes';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  
});

const mapDispatchToProps = dispatch => {
  return {
    // fetchAction: () => dispatch(getAllNotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
