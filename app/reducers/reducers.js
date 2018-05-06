import { combineReducers } from 'redux';
import * as R from 'ramda';

export const defaultInviteState = {
  requested: false,
  requesting: false,
  errorMessage: null,
};

const inviteReducer = (state = defaultInviteState, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        ...state,
        requesting: true,
        errorMessage: null,
      };
    case 'COMPLETE_REQUEST':
      return {
        ...state,
        requesting: false,
        requested: true,
      };
    case 'ERROR_REQUEST':
      return {
        ...state,
        requesting: false,
        errorMessage: action.errorMessage,
      };
    case 'RE_REQUEST':
      return {
        ...state,
        requested: false,
      };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  inviteReducer,
});
