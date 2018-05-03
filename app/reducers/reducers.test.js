import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers, DEFAULT_GLOBAL_STATE } from './reducers';
import * as actions from '../actions/actions';
import { MODES } from '../utils/utils';

let store;

beforeEach(() => {
  store = createStore(
    reducers,
    applyMiddleware(thunk),
  );
});

describe('global reducer', () => {
  it('should return the initial state', () => {
    const { globalReducer } = store.getState();
    expect(globalReducer).toEqual(DEFAULT_GLOBAL_STATE);
  });

  it('should switch mode', () => {
    store.dispatch(actions.SWITCH_MODE(MODES.tournament));
    const { globalReducer } = store.getState();
    expect(globalReducer).toEqual({
      ...DEFAULT_GLOBAL_STATE,
      mode: MODES.tournament,
    });
  });
});
