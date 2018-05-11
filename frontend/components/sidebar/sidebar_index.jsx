import React from 'react';
import SidebarIndexItem from './sidebar_index_item';

export default class SidebarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const entities = this.props.entities.map(entity => (
      <SidebarIndexItem key={entity.id} entity={entity} type={this.props.type}/>
    ));
    return (
      <div className="sidebar-index">
        <div className="sidebar-header">
          <h1>{this.props.type.toUpperCase()}</h1>
        </div>
        <ul>{entities}</ul>
      </div>
    );
  }
}
