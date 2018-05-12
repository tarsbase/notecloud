import React from 'react';

export default class SidebarIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type === "notebooks") {
      return <li className="sidebar-list-item">
          <div className="sidebar-item-title">{this.props.entity.name}</div>
          <div className="note-count">{this.props.entity.notes.length} notes</div>
        </li>;
    } else {
      return (
        <li className="sidebar-list-item">
          <div className="sidebar-item-title">{this.props.entity.name}</div>
        </li>
      );
    }
  }
}