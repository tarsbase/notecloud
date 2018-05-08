import React from 'react';
import NavButtonContainer from './nav_button_container';

export default class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-nav">
        <div>
          <NavButtonContainer type="newNote" />
        </div>
        <div className="main-sub-nav">
          <NavButtonContainer type="notes" />
          <NavButtonContainer type="notebooks" />
          <NavButtonContainer type="tags" />
        </div>
        <div>
          <NavButtonContainer type="logout" />
        </div>
      </div>
    );
  }
}
