import React from 'react';

export default class MainSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', animate: false };
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const textArray = [
      'Stay organized.',
      'Be smarter.',
      'Unlock your creativity.',
      "Get Notecloud, your brain's hard drive."
    ];
    const nextSlide = () => {
      this.setState({ animate: true });
      this.setState({ text: textArray.shift() });
      if (textArray.length > 0) {
        setTimeout(() => {
          this.setState({ animate: false });
        }, 1800);
      }
    };
    const setText = () => {
      if (textArray.length > 0) {
      nextSlide();
      } else {
        clearInterval(interval);
      }
    };
    nextSlide();
    const interval = setInterval(setText, 2000);
  }

  render() {
    const slideClasses = ['slideshow-text'];
    if (this.state.animate) {
      slideClasses.push('animate-text');
    } else {
      slideClasses.push('show-text');
    }
    return (
      <div className="slideshow-container">
        <div className={slideClasses.join(' ')}>{this.state.text}</div>
      </div>
    );
  }
}
