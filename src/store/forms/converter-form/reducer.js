import reducer from '../../../utils/reducer';
import { types } from './actions.js';
import { userTypes } from '../../user/actions';
import { currencyTypes } from '../../currency/actions';

const initState = {
  data: {
    firstCurrency: '',
    secondCurrency: '',
    amount: ''
  },
  options: [],
  errors: null
};

export default reducer(initState, {

  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.CHANGE]: (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  },

  [types.SUBMIT_SUCCESS]: (state, action) => {
    return {
      ...state,
      errors: null
    };
  },

  [types.SUBMIT_FAILURE]: (state, action) => {
    return {
      ...state,
      errors: action.payload
    };
  },

  [userTypes.GET_USER_CURRENCY_SUCCESS] : (state, action) => {
    return {
      ...state,
      options: [
        {
          name: action.payload
        }
      ]
    }
  },

  [currencyTypes.GET_LIST_SUCCESS]: (state, action) => {
    return {
      ...state,
      options: [
        ...state.options,
        ...action.payload
      ],
      wait: false
    };
  },
});
