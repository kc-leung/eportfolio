import React, { Component } from 'react';
import Header from '../Header/Header';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />
      </div>
    );
  }
}
