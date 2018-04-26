import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_contianer';
import SidebarNavContainer from '../nav/sidebar_nav_container';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notes-page">
        <SidebarNavContainer/>
        <NoteIndexContainer/>
        <NoteFormContainer/>
      </div>
    );
  }
}
