import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_contianer';
import SidebarNavContainer from '../nav/sidebar_nav_container';
import SidebarIndexContainer from '../sidebar/sidebar_index_container';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getAllNotes();
    this.props.getAllNotebooks();
    this.props.getAllTags();
  }

  handleClick(e) {
    const {
      notebooksModalIsOpen,
      closeNotebooksModal,
      closeTagsModal
    } = this.props;

    if (e.target.classList.contains('sidebar-modal')) {
      if (notebooksModalIsOpen) {
        closeNotebooksModal();
      } else {
        closeTagsModal();
      }
    }
  }

  render() {
    const { notebooksModalIsOpen, tagsModalIsOpen } = this.props;
    const notebookClasses = ['sidebar-modal'];
    const tagClasses = ['sidebar-modal'];
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
    return (
      <div className="notes-page">
        <SidebarNavContainer />
        <div className={notebookClasses.join(' ')} onClick={this.handleClick}>
          <SidebarIndexContainer type="notebooks" />
        </div>
        <div className={tagClasses.join(' ')} onClick={this.handleClick}>
          <SidebarIndexContainer type="tags" />
        </div>
        <NoteIndexContainer />
        <NoteFormContainer />
      </div>
    );
  }
}
