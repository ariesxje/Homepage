import axios from 'axios';
import configuration from 'configuration'; // eslint-disable-line

const START_REQUEST = () => ({
  type: 'START_REQUEST',
});

const ERROR_REQUEST = errorMessage => ({
  type: 'ERROR_REQUEST',
  errorMessage,
});

const COMPLETE_REQUEST = () => ({
  type: 'COMPLETE_REQUEST',
});

export const RE_REQUEST = () => ({
  type: 'RE_REQUEST',
});

export const SUBMIT_REQUEST = formValues => (
  (dispatch) => {
    dispatch(START_REQUEST());
    axios.post(configuration.api, {
      name: formValues.name,
      email: formValues.email,
    }).then(() => {
      dispatch(COMPLETE_REQUEST());
    }).catch((error) => {
      dispatch(ERROR_REQUEST(error.response.data.errorMessage));
    });
  }
);
