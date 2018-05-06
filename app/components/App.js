import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import configuration from 'configuration'; // eslint-disable-line

import Header from './organism/Header';
import Footer from './organism/Footer';
import PageSection from './organism/PageSection';
import InviteForm from './organism/InviteForm';
import { SUBMIT_REQUEST, RE_REQUEST } from '../actions/actions';

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
  getSection3 = () => {
    return (
      <div style={styles.content3} id="page3" ref={ ref => {this.inviteSection = ref}}>
        <h3>{this.props.requested ? 'You have just started a day with a better way! Thank you.':
        'Get invites as soon as we launch.'}</h3>
        {
          this.props.requested ?
            <button className="button" onClick={this.props.reRequest}>Get another invite</button> :
            <InviteForm
              submitRequest={this.props.submitRequest}
              requestInProgress={this.props.requesting}
              requestFallback={this.props.errorMessage}
            />
        }
      </div>
    );
  };

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
        {this.getSection3()}
      </PageSection>,
      <Footer />,
    ]);
  }
}

App.propTypes = {
  requesting: PropTypes.bool,
  requested: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitRequest: PropTypes.func,
  reRequest: PropTypes.func,
};

App.defaultProps = {
};

const mapStateToProps = (state) => {
  const {
    requesting,
    requested,
    showErrorPopup,
    errorMessage,
  } = state.inviteReducer;
  return {
    requesting,
    requested,
    showErrorPopup,
    errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRequest: (formValues) => {
      dispatch(SUBMIT_REQUEST(formValues));
    },
    reRequest: () => {
      dispatch(RE_REQUEST());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
