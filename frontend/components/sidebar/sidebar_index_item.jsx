import React from 'react';

export default class SidebarIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>
        <div>{this.props.entity.name}</div>
      </li>;
  }
}