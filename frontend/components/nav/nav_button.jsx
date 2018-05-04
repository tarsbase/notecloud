import React from 'react';

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayTooltip: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.modalIsOpen && this.props.type === "Notes") {
      return;
    } else {
      this.props.uiAction();
    }
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
