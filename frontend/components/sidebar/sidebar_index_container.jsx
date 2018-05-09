import { connect } from 'react-redux';
import SidebarIndex from './sidebar_index';

const mapStateToProps = (state, ownProps) => {
  return { title: ownProps.type[0].toUpperCase() + ownProps.type.slice(1) };
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarIndex);
