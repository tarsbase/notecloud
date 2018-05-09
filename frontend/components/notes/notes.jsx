import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_contianer';
import SidebarNavContainer from '../nav/sidebar_nav_container';
import SidebarIndexContainer from '../sidebar/sidebar_index_container';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notebooksModalIsOpen, tagsModalIsOpen } = this.props;
    const notebookClasses = ["sidebar-modal"];
    const tagClasses = ["sidebar-modal"];
    if (notebooksModalIsOpen) {
      notebookClasses.push("open-sidebar-modal");
    } else {
      notebookClasses.push("hide-sidebar-modal");
    }
    if (tagsModalIsOpen) {
      tagClasses.push("open-sidebar-modal");
    } else {
      tagClasses.push("hide-sidebar-modal");
    }
    return (
      <div className="notes-page">
        <SidebarNavContainer />
        <div className={notebookClasses.join(" ")}>
          {notebooksModalIsOpen && <SidebarIndexContainer type="notebooks"/>}
        </div>
        <div className={tagClasses.join(" ")}>
          {tagsModalIsOpen && <SidebarIndexContainer type="tags"/>}
        </div>
        <NoteIndexContainer />
        <NoteFormContainer />
      </div>
    );
  }
}
