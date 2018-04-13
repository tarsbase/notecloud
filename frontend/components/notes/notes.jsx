import React from 'react';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.currentUser.username}</div>
    );
  }
}