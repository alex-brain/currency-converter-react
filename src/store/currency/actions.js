import currency from '../../api/currency';

export const currencyTypes = {
  GET_LIST: 'GET_LIST',
  GET_LIST_SUCCESS: 'GET_LIST_SUCCESS',
  GET_LIST_FAILURE: 'GET_LIST_FAILURE',
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
};

export default {
  getList: (userCurrency) => {
    return async (dispatch) => {
      dispatch({type: currencyTypes.GET_LIST});
      try {
        const response = await currency.getRates(userCurrency);
        const result = response.data.rates;
        let currensyList = [];
        for(let item in result) {
          currensyList.push({
            name: item,
            rate: result[item],
          });
        }
        dispatch({type: currencyTypes.GET_LIST_SUCCESS, payload: currensyList});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: currencyTypes.GET_LIST_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },

  toggleFavourite: (name) => {
    return (dispatch) => {
      dispatch({type: currencyTypes.TOGGLE_FAVOURITE, payload: name,});
    };
  }
};

