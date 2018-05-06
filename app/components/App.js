import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import configuration from 'configuration'; // eslint-disable-line

import Header from './organism/Header';
import Footer from './organism/Footer';
import PageSection from './organism/PageSection';
import InviteForm from './organism/InviteForm';
import { SUBMIT_REQUEST } from '../actions/actions';

const styles = {
  content1: {
    height: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    paddingTop: 150,
    paddingBottom: 150,
  },
  content3: {
    paddingTop: 100,
    paddingBottom: 100,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class App extends React.Component {
  render() {
    return ([
      <Header key="header" />,
      <PageSection key="page1" backgroundImageUrl={configuration.image1}>
        <div style={styles.content1}>
          <h2>A better way to enjoy every day.</h2>
          <button className="button" onClick={() => {
          scrollToElement(this.inviteSection, {duration: 500})
        }}>Start today</button>
        </div>
      </PageSection>,
      <PageSection key="page2">
        <div style={styles.content2}>
          <h3>Lorem ipsum dolor sit amet, ad probo ullum vix, alia nostrud gubergren sit ei. Eos amet postulant voluptatibus ex. Cum facilisi tacimates senserit ex. Ius ea habeo dicit detraxit, nec te veniam eirmod. Expetenda expetendis sed ex.</h3>
        </div>
      </PageSection>,
      <PageSection key="page3" backgroundImageUrl={configuration.image2}>
        <div style={styles.content3} id="page3" ref={ ref => {this.inviteSection = ref}}>
          <h3>Get invites as soon as we launch</h3>
          <InviteForm submitRequest={this.props.submitRequest} requestInProgress={this.props.isRequesting} />
        </div>
      </PageSection>,
      <Footer />,
    ]);
  }
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
