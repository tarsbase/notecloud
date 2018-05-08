import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { getAllNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  notebooks: Object.values(state.notebooks)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllNotebooks: () => dispatch(getAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);