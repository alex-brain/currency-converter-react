import reducer from '../../utils/reducer';
import {types} from './actions';


const initState = {
  list: [],
  favourite: {},
  wait: false,
  errors: null,
};

export default reducer(initState, {
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.GET_LIST]: (state) => {
    return {
      ...state,
      list: [],
      wait: true
    };
  },

  [types.GET_LIST_SUCCESS]: (state, action) => {
    return {
      ...state,
      list : [
        ...action.payload
      ],
      wait: false
    };
  },

  [types.GET_LIST_FAILURE]: (state, action) => {
    return {
      ...state,
      wait: false,
      error: action.error,
    };
  },

  [types.TOGGLE_FAVOURITE]: (state, action) => {
    const favourite = state.favourite;
    if (favourite[action.payload]) {
      delete favourite[action.payload];
    } else {
      favourite[action.payload] = true;
    }

    return {
      ...state,
      favourite,
      wait: false
    };
  },
});

