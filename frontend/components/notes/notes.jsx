import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_contianer';
import SidebarNav from '../nav/sidebar_nav';
import Modal from 'react-modal';

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
    return (
      <div className="notes-page">
        <SidebarNav />
        <Modal
          isOpen={this.props.modalIsOpen}
          style={customStyles}
        >
          <div>Hiya!</div>
        </Modal>
        <NoteIndexContainer />
        <NoteFormContainer />
      </div>
    );
  }
}
