import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import configuration from 'configuration'; // eslint-disable-line

import Header from './organism/Header';
import Footer from './organism/Footer';
import PageSection from './organism/PageSection';
import InviteForm from './organism/InviteForm';
import { SUBMIT_REQUEST } from '../actions/actions';

const App = (props) => {
  return ([
    <Header key="header" />,
    <PageSection key="page1" backgroundImageUrl={configuration.image1}>A better way to enjoy every day.</PageSection>,
    <PageSection key="page2">Ohoho</PageSection>,
    <PageSection key="page3" backgroundImageUrl={configuration.image2}>
      <InviteForm submitRequest={props.submitRequest} requestInProgress={props.isRequesting} />
    </PageSection>,
    <Footer />,
  ]);
};

App.propTypes = {
  isRequesting: PropTypes.bool,
  submitRequest: PropTypes.func,
};

App.defaultProps = {
};

const mapStateToProps = (state) => {
  return {
    isRequesting: state.inviteReducer.requesting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRequest: (formValues) => {
      dispatch(SUBMIT_REQUEST(formValues));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
