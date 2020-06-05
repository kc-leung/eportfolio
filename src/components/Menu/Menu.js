import React, { Component } from 'react';
import { Link } from 'react-scroll';

import { navbarArray } from '../../data/contants';
import './Menu.scss';

export default class Menu extends Component {
  render() {
    return (
      <div className="menuContainer">
        menu
        {/* {navbarArray.map((data, itemIndex) => {
          return (
            <div key={itemIndex} className="menuItem">
              <Link
                activeClass="active"
                to={data.link}
                spy={true}
                smooth={true}
                offset={-62}
                duration={500}
              >
                {data.title}
              </Link>
            </div>
          );
        })} */}
      </div>
    );
  }
}
