import { connect } from 'react-redux';
import SidebarIndex from './sidebar_index';

const mapStateToProps = (state, ownProps) => {
  return { title: ownProps.type.toUpperCase() };
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarIndex);
