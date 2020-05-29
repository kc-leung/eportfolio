import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="logoContainer">
          <div className="name">KC LEUNG</div>
          <div className="profession">WEB DEVELOPER</div>
        </div>
        <Navbar />
      </div>
    );
  }
}
