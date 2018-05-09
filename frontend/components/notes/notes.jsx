import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_contianer';
import SidebarNavContainer from '../nav/sidebar_nav_container';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notebookClasses = ["sidebar-modal"];
    const tagClasses = ["sidebar-modal"];
    if (this.props.notebooksModalIsOpen) {
      notebookClasses.push("open-sidebar-modal");
    } else {
      notebookClasses.push("hide-sidebar-modal");
    }
    if (this.props.tagsModalIsOpen) {
      tagClasses.push("open-sidebar-modal");
    } else {
      tagClasses.push("hide-sidebar-modal");
    }
    return (
      <div className="notes-page">
        <SidebarNavContainer />
        <div className={notebookClasses.join(" ")}>
          <div>Notebooks</div>
        </div>
        <div className={tagClasses.join(" ")}>
          <div>Tags</div>
        </div>
        <NoteIndexContainer />
        <NoteFormContainer />
      </div>
    );
  }
}
