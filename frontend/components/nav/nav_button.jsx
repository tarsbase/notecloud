import React from 'react';

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.action();
  
  }

  render() {
    return (
      <div>
        <i
          className={this.props.classes.join(' ')}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
