import React from 'react';

export default class ShortcutIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.note.title}</li>;
  }
}
