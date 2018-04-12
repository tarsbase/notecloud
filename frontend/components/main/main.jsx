import React from 'react';
import MainNav from './main_nav';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <MainNav/>
      </div>
    );
  }
}