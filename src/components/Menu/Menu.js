import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isModalWindow } from '../../actions/modalAction';

import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <div
        className="menuContainer"
        onClick={() => this.props.isModalWindow(true)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isModalWindow: (bool) => dispatch(isModalWindow(bool)),
  };
};

export default connect(null, mapDispatchToProps)(Menu);
