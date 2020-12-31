import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import breweriesReducer from './breweries';
import beersReducer from './beers';
import thunk from 'redux-thunk';
import session from './session'

const rootReducer = combineReducers({
  session,
  breweries: breweriesReducer,
  beers: beersReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
