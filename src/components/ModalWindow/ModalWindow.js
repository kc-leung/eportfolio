import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';

import { isModalWindow } from '../../actions/modalAction';

import { navbarArray } from '../../data/contants';
import './ModalWindow.scss';

class ModalWindow extends Component {
  render() {
    return (
      <div className="modalWindowContainer">
        <div className="close" onClick={() => this.props.isModalWindow(false)}>
          close
        </div>
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
              >
                {data.title}
              </Link>
            </div>
          );
        })}
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
