import { connect } from 'react-redux';
import Notes from './notes';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(Notes);