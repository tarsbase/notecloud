import React from 'react';

export default class SidebarIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div className="sidebar-index">
        <div className="sidebar-header">
          <h1>{this.props.title}</h1>
        </div>
      </div>;
  }
}