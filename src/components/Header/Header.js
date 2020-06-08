import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';

import './Header.scss';
import '../../animations/shared.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      isMobile: false,
    };

    this.headerRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleScroll = () => {
    if (window.pageYOffset > this.props.landingBottomRect - 62) {
      this.setState({
        sticky: true,
      });
    } else {
      this.setState({
        sticky: false,
      });
    }
  };

  handleResize = () => {
    if (window.innerWidth < 650 || window.innerHeight < 450) {
      this.setState({
        isMobile: true,
      });
    } else {
      this.setState({
        isMobile: false,
      });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.sticky
            ? 'stickyHeaderContainer'
            : 'headerContainer fade-in'
        }
        ref={this.headerRef}
      >
        <a
          className="logoContainer"
          href="#home"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <div className="name">KC LEUNG</div>
          {this.state.isMobile || (
            <div className="profession">WEB DEVELOPER</div>
          )}
        </a>
        {this.state.isMobile ? <Menu /> : <Navbar />}
      </div>
    );
  }
}
