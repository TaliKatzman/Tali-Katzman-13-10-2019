import {actionTypes} from '../actions';

const favorites = (state = [], action) => {
    switch (action.type) {
      case actionTypes.ADD_FAVORITE:
        return [...state,{locationKey:action.locationKey,cityName:action.cityName}];

      case actionTypes.REMOVE_FAVORITE:
      return [...state.filter((obj)=> obj.locationKey !== action.locationKey)];

      default:
        return state;
    }
  }
  
  export default favorites;