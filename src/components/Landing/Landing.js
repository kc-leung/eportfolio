import React, { Component } from 'react';
import './Landing.scss';
import Header from '../Header/Header';

export default class Landing extends Component {
  render() {
    return (
      <div id="home" className="landingContainer">
        <div className="landingContainer-cover" />
        <Header />
        <div className="contentContainer">
          <div className="title">Welcome to KC's ePortfolio.</div>
          <div className="separator"></div>
          <div className="content">
            Coding alone is hard and progress is slow. <br /> Working with a
            team is a two way relationship <br /> where I can provide value to
            you while you invest in me.
          </div>
        </div>
      </div>
    );
  }
}
