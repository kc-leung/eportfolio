import React, { Component } from 'react';
import './Landing.scss';
import Header from '../Header/Header';

export default class Landing extends Component {
  render() {
    return (
      <div className="landingContainer">
        <div className="landingContainer-cover" />
        <Header />
        <div className="contentContainer">
          <div className="title">Your Name</div>
          <div className="separator" />
          <div className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
    );
  }
}
