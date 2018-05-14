import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookShow from './notebook_show';

const mapStateToProps = (state, ownProps) => ({
  notebook: state.notebooks[ownProps.match.params.notebookId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow));