import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers';

const store = createStore(
  rootReducers,
  applyMiddleware(thunk),
);

export default store;
