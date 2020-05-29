import React, { Component } from 'react';
import { navbarArray } from '../../data/contants';
import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        {navbarArray.map((data, itemIndex) => {
          return (
            <div key={itemIndex} className="navbarItem">
              {data}
            </div>
          );
        })}
      </div>
    );
  }
}
