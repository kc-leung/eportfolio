import React, { Component } from 'react';
import { connect } from 'react-redux';

import Landing from '../Landing/Landing';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import ModalWindow from '../ModalWindow/ModalWindow';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        {this.props.getModalWindowStatus === true && <ModalWindow />}
        <Landing />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getModalWindowStatus: state.modalWindowReducer.isModalWindowStatus,
  };
};

export default connect(mapStateToProps, null)(Main);
