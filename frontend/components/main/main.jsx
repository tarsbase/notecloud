import React from 'react';
import MainNav from './main_nav';
import MainSlideshow from './main_slideshow';
import SessionFromContainer from '../session/session_form_container';
import Footer from './footer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="main">
        <MainNav />
        <div className="main-content">
          <div className="main-content-left">
            <MainSlideshow />
            <div className="slideshow-subtext">Create, organize and access your ideas from anywhere.</div>
          </div>
          <div className="divider"></div>
          <div className="main-content-right">
            <SessionFromContainer/>
          </div>
        </div>
        <Footer/>
      </div>;
  }
}