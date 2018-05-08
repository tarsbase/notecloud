import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_contianer';
import SidebarNav from '../nav/sidebar_nav';

const customStyles = {
  content: {
    top: 20,
    left: 100,
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classList = ["sidebar-container"];
    if (this.props.modalIsOpen) {
      classList.push("open-sidebar");
    } else {
      classList.push("hide-sidebar");
    }
    return (
      <div className="notes-page">
        <SidebarNav />
        <div className={classList.join(" ")}>
          <div>Hello</div>
        </div>
        <NoteIndexContainer />
        <NoteFormContainer />
      </div>
    );
  }
}
