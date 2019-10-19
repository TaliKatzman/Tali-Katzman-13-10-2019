import { combineReducers } from 'redux';
import view from './view';
import favorites from './favorites';
import location from './location';

export default combineReducers ({view,favorites,location})