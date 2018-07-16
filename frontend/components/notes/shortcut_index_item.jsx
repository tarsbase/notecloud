import React from 'react';
import { withRouter } from 'react-router-dom';

class ShortcutIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeShortcut = this.removeShortcut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeShortcutsModal();
    this.props.history.push(`/notes/${this.props.note.id}`);
  }

  removeShortcut(e) {
    e.preventDefault();
    e.stopPropagation();
    const note = this.props.note;
    note.shortcut = false;
    this.props.updateNote(note, true);
  }

  render() {
    return <li className="shortcut-index-item" onClick={this.handleClick}>
      <div className="shortcut-note">
        <i className="fa fa-sticky-note"/>
        <div className="shortcut-title">{this.props.note.title}</div>
      </div>
      <i className="fa fa-minus-circle" onClick={this.removeShortcut}/>
      </li>;
  }
}

export default withRouter(ShortcutIndexItem);