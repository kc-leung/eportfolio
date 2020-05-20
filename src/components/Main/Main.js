import React, { Component } from 'react';
import './Main.scss';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Landing from '../Landing/Landing';

export default class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Landing />
        <Projects />
        <Footer />
      </div>
    );
  }
}
