import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_container';
import SidebarNavContainer from '../nav/sidebar_nav_container';
import SidebarIndexContainer from '../sidebar/sidebar_index_container';
import DeleteModalContainer from '../modals/delete_modal_container';
import BannerModalContainer from '../modals/banner_modal_container';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (typeof this.props.openModal === 'function') {
      this.props.openModal();
    }
  }

  handleClick(e) {
    const {
      notebooksModalIsOpen,
      tagsModalIsOpen,
      closeNotebooksModal,
      closeTagsModal,
      closeShortcutsModal
    } = this.props;
    if (e.target.classList.contains('sidebar-modal')) {
      if (notebooksModalIsOpen) {
        closeNotebooksModal();
      } else if (tagsModalIsOpen) {
        closeTagsModal();
      } else {
        closeShortcutsModal();
      }
      this.props.history.push('/notes');
    }
  }

  render() {
    const {
      notebooksModalIsOpen,
      tagsModalIsOpen,
      shortcutsModalIsOpen,
      deleteEntityType
    } = this.props;
    const notebookClasses = ['sidebar-modal', 'notebooks-modal'];
    const tagClasses = ['sidebar-modal'];
    const shortcutClasses = ['sidebar-modal'];
    if (notebooksModalIsOpen) {
      notebookClasses.push('open-sidebar-modal');
    } else {
      notebookClasses.push('hide-sidebar-modal');
    }
    if (tagsModalIsOpen) {
      tagClasses.push('open-sidebar-modal');
    } else {
      tagClasses.push('hide-sidebar-modal');
    }
    if (shortcutsModalIsOpen) {
      shortcutClasses.push('open-sidebar-modal');
    } else {
      shortcutClasses.push('hide-sidebar-modal');
    }
    return (
      <div className="notes-page">
        <SidebarNavContainer />
        <NoteIndexContainer />
        <div className={shortcutClasses.join(' ')} onClick={this.handleClick}>
          <NoteIndexContainer />
        </div>
        <div className={notebookClasses.join(' ')} onClick={this.handleClick}>
          <SidebarIndexContainer type="notebooks" />
        </div>
        <div className={tagClasses.join(' ')} onClick={this.handleClick}>
          <SidebarIndexContainer type="tags" />
        </div>
        <NoteFormContainer />
        <DeleteModalContainer deleteEntityType={deleteEntityType} />
        <BannerModalContainer/>
      </div>
    );
  }
}
