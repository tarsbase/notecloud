import { connect } from 'react-redux';
import SidebarNav from './sidebar_nav';

const mapStateToProps = state => ({
  notebooksModalIsOpen: state.ui.notebooksModalIsOpen,
  tagsModalIsOpen: state.ui.tagsModalIsOpen,
  shortcutsModalIsOpen: state.ui.shortcutsModalIsOpen
});

export default connect(mapStateToProps, null)(SidebarNav);