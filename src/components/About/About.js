import React, { Component } from 'react';
import ResumeLink from '../../assets/GuozhaoLiang(KC)_Resume.docx';
import './About.scss';

export default class About extends Component {
  render() {
    return (
      <div id="about" className="aboutContainer">
        <div className="title">About Me!</div>
        <div className="content">
          <p>
            Hello there! So you are here to learn more about me!?{' '}
            <span role="img" aria-label="impressed">
              😲
            </span>
            .
          </p>
          <p>
            I am Kc Leung a Web Developer who loves learning new things. Coding
            was the perfect place to be since it is always changing and moving
            forward. New technologies and framework emerges which as a developer
            we can't stop learning otherwise we will fall behind{' '}
            <span role="img" aria-label="study">
              🤓
            </span>
            .
          </p>
          <p>
            First, there was jQuery, then Angular, then React and now Vue. All
            these new ways of coding are emerging so fast, some people might
            find this overwhelming but for me this is what makes programming
            exciting!{' '}
            <span role="img" aria-label="happy">
              😁👨‍💻
            </span>
            .
          </p>
          <p>
            Want to know more about me? Have a look on my
            <span className="resume">
              <a href={ResumeLink} download="GuozhaoLiang(KC)_Resume.docx">
                resume!
              </a>
            </span>
            <span role="img" aria-label="resume">
              👈
            </span>
            .
          </p>
        </div>
      </div>
    );
  }
}
