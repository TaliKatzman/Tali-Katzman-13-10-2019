import {actionTypes} from '../actions';
import {VIEW_TYPES} from '../constants';

const view = (state = VIEW_TYPES.HOME, action) => {
    switch (action.type) {
      case actionTypes.SET_VIEW_FAVORITES:
        return VIEW_TYPES.FAVORITES;

      case actionTypes.SET_VIEW_HOME:
        return VIEW_TYPES.HOME;

      default:
        return state;
    }
  }
  
  export default view;