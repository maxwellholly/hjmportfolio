// get all needed redux functions
import { combineReducers, createStore, applyMiddleware } from 'redux';
// middleware for making actions asynchronous
import thunkMiddleware from 'redux-thunk';
// add a logger to log all actions to the console
import { createLogger } from 'redux-logger';
import { routerReducer } from 'react-router-redux';
// import reducers
import posts from './posts/reducer';
import auth from './auth/reducer';
// combine reducers
const rootReducer = combineReducers({
  posts,
  auth,
  routing: routerReducer,
});

// middleware setup
const middleware = applyMiddleware(thunkMiddleware, createLogger());

// create redux store using combineReducers and middleware functions
const store = createStore(rootReducer, middleware);
export default store;
