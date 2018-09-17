import reducer from '../../utils/reducer';
import {types} from './actions';


const initState = {
  rate: null,
  wait: false,
  errors: null,
};

export default reducer(initState, {
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.GET_RATE]: (state) => {
    return {
      ...state,
      rate: null,
      wait: true
    };
  },

  [types.GET_RATE_SUCCESS]: (state, action) => {
    return {
      ...state,
      rate: action.payload,
      wait: false
    };
  },

  [types.GET_RATE_FAILURE]: (state, action) => {
    return {
      ...state,
      wait: false,
      error: action.error,
    };
  },
});

