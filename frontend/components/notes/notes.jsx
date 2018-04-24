import React from 'react';
import NoteIndexContainer from './note_index_container';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NoteIndexContainer/>
      </div>
    );
  }
}
