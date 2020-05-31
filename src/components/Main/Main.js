import React, { Component } from 'react';

import Landing from '../Landing/Landing';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Landing />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}
