import { location, countries } from '../../api';
import { currency } from '../actions';

export const types = {
  GET_LOCATION: 'GET_LOCATION',
  GET_LOCATION_SUCCESS: 'GET_LOCATION_SUCCESS',
  GET_LOCATION_FAILURE: 'GET_LOCATION_FAILURE',
  GET_COUNTRIES: 'GET_COUNTRIES',
  GET_COUNTRIES_SUCCESS: 'GET_COUNTRIES_SUCCESS',
  GET_COUNTRIES_FAILURE: 'GET_COUNTRIES_FAILURE'
};

export default {
  getList: () => {
    return async (dispatch) => {
      dispatch({type: types.GET_LOCATION});

      try {
        const response = await location.getLocation();
        const result = {
          country: response.data.country
        };
        const countriesResponse = await countries.getList();
        const countriesResult = countriesResponse.data.results;
        const userCountry = Object.values(countriesResult).find(item => item.name === result.country);
        const userCurrency = userCountry ? userCountry.currencyId : null;
        dispatch({type: types.GET_LOCATION_SUCCESS, payload: userCurrency});
        await dispatch(currency.getList(userCurrency));
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.GET_LOCATION_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  },
};

