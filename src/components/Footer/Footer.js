import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="contactContainer">
          <div className="messageContainer">textbox</div>
          <div className="emailContainer">email</div>
          <div className="githubContainer">github</div>
          <div className="phoneContainer">phone</div>
        </div>
        <div className="footerContent">rights!</div>
      </div>
    );
  }
}
