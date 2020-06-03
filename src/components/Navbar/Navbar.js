import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { navbarArray } from '../../data/contants';
import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        {navbarArray.map((data, itemIndex) => {
          return (
            <div key={itemIndex} className="navbarItem">
              <Link
                activeClass="active"
                to={data.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {data.title}
              </Link>
              {/* <a className="navbarLink" href={data.link}>
                {data.title}
              </a> */}
            </div>
          );
        })}
      </div>
    );
  }
}
