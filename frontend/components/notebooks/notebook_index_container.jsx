import { connect } from 'react-redux';
import {
  getAllNotebooks,
  deleteNotebook
} from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = (state, ownProps) => ({
  notebooks: Object.values(state.notebooks)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);
