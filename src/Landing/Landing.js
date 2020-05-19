import React, { Component } from 'react';
import './Landing.scss';
import Header from '../Header/Header';

export default class Landing extends Component {
  render() {
    return (
      <div className="landingContainer">
        <Header />
      </div>
    );
  }
}
