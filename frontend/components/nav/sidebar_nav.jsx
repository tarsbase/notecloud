import React from 'react';
import NavButtonConianer from './nav_button_container';

export default class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-nav">
        <div>
          <NavButtonConianer type="newNote" />
        </div>
        <div className="main-sub-nav">
          <NavButtonConianer type="notes" />
          <NavButtonConianer type="notebooks" />
          <NavButtonConianer type="tags" />
        </div>
        <div>
          <NavButtonConianer type="logout" />
        </div>
      </div>
    );
  }
}
