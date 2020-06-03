import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from '../Navbar/Navbar';
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
    };

    this.headerRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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

  render() {
    return (
      <div
        className={
          this.state.sticky ? 'stickyHeaderContainer' : 'headerContainer'
        }
        ref={this.headerRef}
      >
        <a className="logoContainer" href="#home">
          <div className="name">KC LEUNG</div>
          <div className="profession">WEB DEVELOPER</div>
        </a>
        <Navbar />
      </div>
    );
  }
}
