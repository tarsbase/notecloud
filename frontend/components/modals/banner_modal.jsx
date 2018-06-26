import React from 'react';

export default class BannerModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.bannerModalIsOpen && nextProps.bannerModalIsOpen) {
      setTimeout(() => {
        this.props.closeBannerModal();
      }, 2000);
    }
  }

  render() {
    const modalClasses = ['banner-modal'];
    if (this.props.bannerModalIsOpen) {
      modalClasses.push('show-fs-modal');
    } else {
      modalClasses.push('hide-fs-modal');
    }
    return (
      <div className={modalClasses.join(' ')}>
        {this.props.msg}
      </div>
    );  
  }
}