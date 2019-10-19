import {actionTypes} from '../actions';
import {DEFAULT_LOCATION_KEY,DEFAULT_LOCATION_NAME} from '../constants';

const defaultLocation = {locationKey:DEFAULT_LOCATION_KEY,cityName:DEFAULT_LOCATION_NAME};

const location = (state = defaultLocation, action) => {
    switch (action.type) {
      case actionTypes.SET_LOCATION:
        return {locationKey:action.locationKey,cityName:action.cityName}

      default:
        return state;
    }
  }
  
  export default location;