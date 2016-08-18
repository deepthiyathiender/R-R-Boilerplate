import thunkMiddleware from 'redux-thunk';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from 'reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

const reducer = combineReducers({ ...reducers, routing: routerReducer });

export const store = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
