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
      const { data } = getState().converterForm;
      try {
        const response = await currency.getRate(data.firstCurrency, data.secondCurrency);
        const result = response.data.rates;
        dispatch({type: types.GET_RATE_SUCCESS, payload: {}});
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

