import reducer from '../../utils/reducer';
import {types} from './actions';


const initState = {
  currency: '',
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
      currency: '',
      wait: true
    };
  },

  [types.GET_LOCATION_SUCCESS]: (state, action) => {
    return {
      ...state,
      currency : action.payload,
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

