import { combineReducers } from 'redux';
import characters from './characters';

const rootReducers = combineReducers({
  characters,
});

export default rootReducers;
