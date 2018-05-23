import { connect } from 'react-redux';
import SidebarNav from './sidebar_nav';

const mapStateToProps = state => ({
  notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
  tagsModalIsOpen: state.ui.tagsModalIsOpen,
  tooltipHidden: state.ui.tooltipHidden
});

export default connect(mapStateToProps, null)(SidebarNav);