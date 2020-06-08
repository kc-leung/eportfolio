import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';

import { isModalWindow } from '../../actions/modalAction';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';

import { navbarArray } from '../../data/contants';

import './ModalWindow.scss';
import '../../animations/shared.scss';

class ModalWindow extends Component {
  render() {
    return (
      <div className="modalWindowContainer fade-in">
        <div className="close" onClick={() => this.props.isModalWindow(false)}>
          <CloseIcon className="closeIcon" />
        </div>
        <div className="menuItemContainer">
          {navbarArray.map((data, itemIndex) => {
            return (
              <div key={itemIndex} className="menuItem">
                <Link
                  activeClass="active"
                  to={data.link}
                  spy={true}
                  smooth={true}
                  offset={-62}
                  duration={500}
                  onClick={() => this.props.isModalWindow(false)}
                >
                  {data.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isModalWindow: (bool) => dispatch(isModalWindow(bool)),
  };
};

export default connect(null, mapDispatchToProps)(ModalWindow);
