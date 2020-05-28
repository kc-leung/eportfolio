import React, { Component } from 'react';
import './Projects.scss';

import { projectArray } from '../../data/contants';
import demoIcon from '../../assets/svg/demo.svg';
import githubIcon from '../../assets/svg/github.svg';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
    };

    this.testing = './Angularstore.png';
  }

  onHoverItem = (index) => {
    this.setState({
      active: index,
    });
  };

  render() {
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
                style={{
                  backgroundImage: `url(${data.backgroundImage})`,
                }}
                onMouseEnter={() => this.onHoverItem(itemIndex)}
                onMouseLeave={() => this.onHoverItem(null)}
              >
                <div className="itemDetailContainer">
                  {this.state.active === itemIndex ? (
                    <div className="iconContainer">
                      <div
                        className="icon demo"
                        style={{
                          backgroundColor: `${data.color}`,
                        }}
                      >
                        <span>Demo</span>
                        <img
                          src={demoIcon}
                          className="demoIcon"
                          alt="demoIcon"
                        />
                      </div>
                      <div
                        className="icon github"
                        style={{
                          backgroundColor: `${data.color}`,
                        }}
                      >
                        <span>GitHub</span>
                        <img
                          src={githubIcon}
                          className="githubIcon"
                          alt="githubIcon"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="descriptionContainer">
                      <div className="descriptionHeader">
                        <div className="projectTitle">{data.title}</div>
                        <div className="separator" />
                      </div>
                      <div className="projectDescription">
                        {data.description}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="bannerColor"
                  style={{
                    backgroundColor: `${data.color}`,
                    opacity: `${this.state.active === itemIndex ? 0 : 0.9}`,
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
