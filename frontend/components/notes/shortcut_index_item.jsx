import React from 'react';

export default class ShortcutIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeShortcut = this.removeShortcut.bind(this);
  }

  removeShortcut(e) {
    e.preventDefault();
    const note = this.props.note;
    note.shortcut = false;
    this.props.updateNote(note);
  }

  render() {
    return <li className="shortcut-index-item">
      <div className="shortcut-note">
        <i className="fa fa-sticky-note"/>
        <div className="shortcut-title">{this.props.note.title}</div>
      </div>
      <i className="fa fa-minus-circle" onClick={this.removeShortcut}/>
      </li>;
  }
}
