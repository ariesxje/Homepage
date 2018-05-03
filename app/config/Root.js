import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { reducers } from '../reducers/reducers';
import App from '../components/App';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

export default Root;

