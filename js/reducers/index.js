import {combineReducers} from 'redux';
import Initial from './main.js';
import {routerReducer as routing} from 'react-router-redux';

export default combineReducers({
  Initial,
  routing
});
