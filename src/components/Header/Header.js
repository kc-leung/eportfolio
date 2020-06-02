import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <a className="logoContainer" href="#home">
          <div className="name">KC LEUNG</div>
          <div className="profession">WEB DEVELOPER</div>
        </a>
        <Navbar />
      </div>
    );
  }
}
