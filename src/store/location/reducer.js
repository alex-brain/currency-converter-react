import reducer from '../../utils/reducer';
import {types} from './actions';


const initState = {
  country: {},
  wait: false,
  errors: null,
};

export default reducer(initState, {
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.GET_LOCATION]: (state) => {
    return {
      ...state,
      country: {},
      wait: true
    };
  },

  [types.GET_LOCATION_SUCCESS]: (state, action) => {
    return {
      ...state,
      country : {
        ...action.payload
      },
      wait: false
    };
  },

  [types.GET_LOCATION_FAILURE]: (state, action) => {
    return {
      ...state,
      wait: false,
      error: action.error,
    };
  }

});

