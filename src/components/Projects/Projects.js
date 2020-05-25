import React, { Component } from 'react';
import './Projects.scss';

import { projectArray } from '../../data/contants';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
    };
  }

  onHoverItem = (index) => {
    console.log(index);
    this.setState({
      active: index,
    });
  };

  render() {
    console.log('render!!');
    return (
      <div className="projectsContainer">
        <div className="titleContainer">
          <div className="title">P R O J E C T S</div>
        </div>
        <div className="contentContainer">
          {projectArray.map((data, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className="itemContainer"
                onMouseEnter={() => this.onHoverItem(itemIndex)}
                onMouseLeave={() => this.onHoverItem(null)}
              >
                <div className="itemDetailContainer">
                  <div className="projectTitle">{data.title}</div>
                  <div className="separator" />
                  <div className="projectDescription">{data.description}</div>
                  <div className="iconContainer">
                    <div className="demo">Demo</div>
                    <div className="github">Github</div>
                  </div>
                </div>
                <div
                  className="bannerColor"
                  style={{
                    backgroundColor: `${data.color}`,
                    opacity: `${this.state.active === itemIndex ? 0 : 0.8}`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
