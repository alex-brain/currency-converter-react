import currency from '../../api/currency';

export const types = {
  GET_RATE: 'GET_RATE',
  GET_RATE_SUCCESS: 'GET_RATE_SUCCESS',
  GET_RATE_FAILURE: 'GET_RATE_FAILURE',
};

export default {
  getRate: () => {
    return async (dispatch, getState) => {
      dispatch({type: types.GET_RATE});
      const { firstCurrency, secondCurrency, amount } = getState().converterForm.data;
      try {
        const response = await currency.getRate(firstCurrency, secondCurrency);
        const result = response.data.rates[secondCurrency] * amount;
        dispatch({type: types.GET_RATE_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.GET_RATE_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },
};

