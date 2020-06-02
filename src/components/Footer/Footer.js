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
            <a href="mailto:chiu-leung@Hotmail.com">
              <div className="iconContainer">
                <EmailIcon className="icon" />
              </div>
            </a>
            <div className="content">
              <div className="title">Email</div>
              <a className="info" href="mailto:chiu-leung@Hotmail.com">
                chiu-leung@Hotmail.com
              </a>
            </div>
          </div>
          <div className="githubContainer">
            <a
              href="https://github.com/kc-leung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iconContainer">
                <GithubIcon className="icon" />
              </div>
            </a>
            <div className="content">
              <div className="title">GitHub</div>
              <a
                className="info"
                href="https://github.com/kc-leung"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/kc-leung
              </a>
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
        <div className="footerContent">
          © 2020 KC Leung. All rights reserved.
        </div>
      </div>
    );
  }
}
