import React from 'react';

export default class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spinnerClasses = ['fa fa-spinner fa-spin fa-2x loading-spinner'];
    if (!this.props.loadingSpinnerIsVisible) {
      spinnerClasses.push('hide');
    }
    return <i className={spinnerClasses.join(' ')}></i>;
  }
}