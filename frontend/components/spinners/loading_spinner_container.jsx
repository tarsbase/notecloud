import { connect } from 'react-redux';
import LoadingSpinner from './loading_spinner';

const mapStateToProps = state => ({
  loadingSpinnerIsVisible: state.ui.loadingSpinnerIsVisible
});

// const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  null
)(LoadingSpinner);
