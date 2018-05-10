import { connect } from 'react-redux';
import SidebarIndex from './sidebar_index';
import { getAllNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  return { title: ownProps.type.toUpperCase() };
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarIndex);
