import React, { Component } from 'react';
import './Footer.scss';

import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as PhoneIcon } from '../../assets/svg/phone.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="contactContainer">
          <div className="emailContainer">
            <div className="iconContainer">
              <EmailIcon className="icon" />
            </div>
            <div className="content">
              <div className="title">Email</div>
              <div className="info">chiu-leung@Hotmail.com</div>
            </div>
          </div>
          <div className="githubContainer">
            <div className="iconContainer">
              <GithubIcon className="icon" />
            </div>
            <div className="content">
              <div className="title">GitHub</div>
              <div className="info">https://github.com/kc-leung</div>
            </div>
          </div>
          <div className="phoneContainer">
            <div className="iconContainer">
              <PhoneIcon className="icon" />
            </div>
            <div className="content">
              <div className="title">Phone</div>
              <div className="info">(001) 647-390-3654</div>
            </div>
          </div>
        </div>
        <div className="footerContent">rights!</div>
      </div>
    );
  }
}
