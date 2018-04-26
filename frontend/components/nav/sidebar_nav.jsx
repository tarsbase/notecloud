import React from 'react';

export default class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="sidebar-nav">
        <div>
          <i className="fa fa-plus-circle fa-2x nav-icon" />
        </div>
        <div className="main-sub-nav">
          <i className="fa fa-sticky-note nav-icon"/>
          <i className="fa fa-book nav-icon"/>
          <i className="fa fa-tag nav-icon"/>
        </div>
        <div></div>
      </div>;
  }
}