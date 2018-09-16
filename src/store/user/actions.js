import { location, countries } from '../../api';
import { currency } from '../actions';

export const userTypes = {
  GET_USER_CURRENCY: 'GET_USER_CURRENCY',
  GET_USER_CURRENCY_SUCCESS: 'GET_USER_CURRENCY_SUCCESS',
  GET_USER_CURRENCY_FAILURE: 'GET_USER_CURRENCY_FAILURE'
};

export default {
  getUserCurrency: () => {
    return async (dispatch) => {
      dispatch({type: userTypes.GET_USER_CURRENCY});

      try {
        const response = await location.getLocation();
        const result = {
          country: response.data.country
        };
        const countriesResponse = await countries.getList();
        const countriesResult = countriesResponse.data.results;
        const userCountry = Object.values(countriesResult).find(item => item.name === result.country);
        const userCurrency = userCountry ? userCountry.currencyId : 'RUB';
        dispatch({type: userTypes.GET_USER_CURRENCY_SUCCESS, payload: userCurrency});
        await dispatch(currency.getList(userCurrency));
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: userTypes.GET_USER_CURRENCY_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },

  changeUserCurrency: (data) => {
    return async (dispatch) => {
      dispatch({type: userTypes.GET_USER_CURRENCY_SUCCESS, payload: data,});
      await dispatch(currency.getList(data));
    };
  },
};

