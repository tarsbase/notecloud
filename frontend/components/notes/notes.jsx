import React from 'react';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div>
        <div>{this.props.currentUser.username}</div>
        <button onClick={this.handleClick} className="btn btn-link">
          Logout
        </button>
      </div>
    );
  }
}
