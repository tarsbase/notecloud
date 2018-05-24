import React from 'react';

export default class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-item">{this.props.tag.name}</li>
    );
  }
}