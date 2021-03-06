import reducer from '../../utils/reducer';
import {userTypes} from './actions';


const initState = {
  currency: '',
  wait: false,
  errors: null,
};

export default reducer(initState, {
  [userTypes.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [userTypes.GET_USER_CURRENCY]: (state) => {
    return {
      ...state,
      currency: '',
      wait: true
    };
  },

  [userTypes.GET_USER_CURRENCY_SUCCESS]: (state, action) => {
    return {
      ...state,
      currency : action.payload,
      wait: false
    };
  },

  [userTypes.GET_USER_CURRENCY_FAILURE]: (state, action) => {
    return {
      ...state,
      wait: false,
      error: action.error,
    };
  }

});

