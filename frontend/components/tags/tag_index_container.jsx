import { connect } from 'react-redux';
import TagIndex from './tag_index';
import { getAllTags, getTag } from '../../actions/tag_actions';
import { getSortedTags } from '../../selectors/tag_selectors';

const mapStateToProps = (state, ownProps) => ({
  tags: getSortedTags(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllTags: () => dispatch(getAllTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);