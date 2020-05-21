import React, { Component } from 'react';
import './Projects.scss';

import { colorArray } from '../../data/contants';

export default class Projects extends Component {
  render() {
    return (
      <div className="projectsContainer">
        <div className="contentContainer">
          <div className="title">P R O J E C T S</div>
        </div>
        <div className="projectBanner">
          {colorArray.map((data, colorIndex) => {
            return (
              <div
                key={colorIndex}
                className="bannerColor"
                style={{ backgroundColor: `${data}` }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
