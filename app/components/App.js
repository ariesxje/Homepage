import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import configuration from 'configuration';

import Header from './organism/Header';
import Footer from './organism/Footer';
import PageSection from './organism/PageSection';

const App = (props) => {

  return (
    [
      <Header key="header"/>,
      <PageSection key="page1" backgroundImageUrl={configuration.image1}>A better way to enjoy every day.</PageSection>,
      <PageSection key="page2">Ohoho</PageSection>,
      <PageSection key="page3" backgroundImageUrl={configuration.image2}>Invite</PageSection>,
      <Footer/>
    ]
  );
};

App.propTypes = {
};

App.defaultProps = {
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
