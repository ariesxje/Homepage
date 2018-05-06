import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import { reducers, defaultInviteState } from './reducers';
import * as actions from '../actions/actions';

let store;

beforeEach(() => {
  store = createStore(
    reducers,
    applyMiddleware(thunk),
  );
});

describe('invite reducer', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should return the initial state', () => {
    const { inviteReducer } = store.getState();
    expect(inviteReducer).toEqual(defaultInviteState);
  });

  it('should reset error message and set requesting when starting a request', () => {
    store.dispatch(actions.SUBMIT_REQUEST({name: 'name', email: 'email'}));
    const { inviteReducer } = store.getState();

    expect(inviteReducer).toEqual({
      ...defaultInviteState,
      requesting: true,
      errorMessage: null,
    });

    mockAxios.mockResponse({status: 200});

    expect(inviteReducer).toEqual({
      ...defaultInviteState,
      requested: true,
    })
  });
});
