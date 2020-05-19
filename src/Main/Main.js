import React, { Component } from 'react';
import Header from '../Header/Header';
import './Main.scss';
import Footer from '../Footer/Footer';

export default class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />
        <Footer />
      </div>
    );
  }
}
