import React from 'react';
import SessionLinks from '../session/session_links';

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav className='main-nav'>
        <h1 className="main-logo">NOTECLOUD</h1>
        <SessionLinks/>
      </nav>
    );
  }
}