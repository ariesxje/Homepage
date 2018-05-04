import { combineReducers } from 'redux';
import * as R from 'ramda';

const defaultInviteState = {
  requested: false,
  requesting: false,
  showErrorPopup: false,
};

const inviteReducer = (state = defaultInviteState, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        ...state,
        requesting: true,
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
        showErrorPopup: true,
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
