import React, { Component } from 'react';
import './Projects.scss';

import { projectArray } from '../../data/contants';

export default class Projects extends Component {
  render() {
    return (
      <div className="projectsContainer">
        <div className="titleContainer">
          <div className="title">P R O J E C T S</div>
        </div>
        <div className="contentContainer">
          {projectArray.map((data, itemIndex) => {
            return (
              <div key={itemIndex} className="itemContainer">
                <div className="itemDetailContainer">
                  <div className="projectTitle">{data.title}</div>
                  <div className="separator" />
                  <div className="projectDescription">{data.description}</div>
                </div>
                <div
                  className="bannerColor"
                  style={{ backgroundColor: `${data.color}` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
