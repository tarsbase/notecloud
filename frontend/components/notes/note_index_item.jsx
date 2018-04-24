import React from 'react';
import { Link } from 'react-router-dom';

export default class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.note.title}</li>
    );
  }
}
