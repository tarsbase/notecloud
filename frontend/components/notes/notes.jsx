import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_contianer';
import SidebarNav from '../nav/sidebar_nav';
import Modal from 'react-modal';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notes-page">
        <SidebarNav/>
        <NoteIndexContainer/>
        <NoteFormContainer/>
      </div>
    );
  }
}
