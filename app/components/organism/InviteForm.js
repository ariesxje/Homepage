import React, { Component } from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { Form, Text } from 'react-form';

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const styles = {
  form: {
    width: 300,
  },
  label: {
    display: 'block',
    marginTop: 10,
  },
  text: {
    width: '100%',
    height: '1.5em',
    fontSize: '1em',
    padding: 5
  },
  button: {
    marginTop: 20,
    margin: '20px auto',
    display: 'block'
  },
  helpMessage: {
    fontSize: '0.8em',
  }
};

class InviteForm extends Component {
  validateName = (name) => {
    if (R.isNil(name) || R.isEmpty(name)) {
      return 'Please tell us your name.';
    }
    return null;
  };

  validateEmail = (email) => {
    if (R.isNil(email) || R.isEmpty(email)) {
      return 'Without your email address, we are unable to send you invites.';
    } else if (!re.test(email.toLowerCase())) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  render() {
    return (
      <Form onSubmit={this.props.submitRequest}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="inviteForm" style={styles.form} noValidate>
            <label htmlFor="fullName" style={styles.label}>Full Name</label>
            <Text field="name" id="fullName" validate={this.validateName} style={styles.text} validateOnSubmit />
            <div style={styles.helpMessage}>{formApi.getError('name')}</div>
            <label htmlFor="email" style={styles.label}>Email</label>
            <Text field="email" id="email" type="email" validateOnSubmit style={styles.text} validate={this.validateEmail} />
            <div style={styles.helpMessage}>{formApi.getError('email')}</div>
            <button type="submit" disabled={this.props.requestInProgress} className="button"
            style={styles.button}>
              {this.props.requestInProgress ? 'Sending request...' : 'Send me invite'}
            </button>
            <div style={styles.helpMessage}>{this.props.requestFallback}</div>
          </form>
        )}
      </Form>
    );
  }
}

InviteForm.propTypes = {
  submitRequest: PropTypes.func.isRequired,
  requestInProgress: PropTypes.bool,
  requestFallback: PropTypes.string
};

InviteForm.defaultProps = {
  requestInProgress: false,
};

export default InviteForm;
