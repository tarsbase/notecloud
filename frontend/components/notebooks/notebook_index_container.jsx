import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';

const mapStateToProps = (state, ownProps) => ({
  notebooks: Object.values(state.notebooks)
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);