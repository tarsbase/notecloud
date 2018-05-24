import { connect } from 'react-redux';
import SidebarIndex from './sidebar_index';
import { sidebarIndexSelector } from '../../selectors/sidebar_index_selectors';

const mapStateToProps = (state, ownProps) => {
  const { entities } = sidebarIndexSelector(state, ownProps);
  return { 
    type: ownProps.type, 
    entities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { fetchAction, createAction } = sidebarIndexSelector(null, ownProps);
  return {
    fetchAction: () => dispatch(fetchAction()),
    createAction: (entityName) => dispatch(createAction(entityName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarIndex);
