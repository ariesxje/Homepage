import React, { Component } from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { Form, Text } from 'react-form';

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
          <form onSubmit={formApi.submitForm} id="inviteForm" noValidate>
            <label htmlFor="fullName">Full Name</label>
            <Text field="name" id="fullName" validate={this.validateName} validateOnSubmit />
            <div>{formApi.getError('name')}</div>
            <label htmlFor="email">Email</label>
            <Text field="email" id="email" type="email" validateOnSubmit validate={this.validateEmail} />
            <div>{formApi.getError('email')}</div>
            <button type="submit" disabled={this.props.requestInProgress}>
              {this.props.requestInProgress ? 'Sending request...' : 'Send me invite'}
            </button>
          </form>
        )}
      </Form>
    );
  }
}

InviteForm.propTypes = {
  submitRequest: PropTypes.func.isRequired,
  requestInProgress: PropTypes.bool,
};

InviteForm.defaultProps = {
  requestInProgress: false,
};

export default InviteForm;
