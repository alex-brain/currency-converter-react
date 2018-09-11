import location from '../../api/location';

export const types = {
  GET_LOCATION: 'GET_LOCATION',
  GET_LOCATION_SUCCESS: 'GET_LOCATION_SUCCESS',
  GET_LOCATION_FAILURE: 'GET_LOCATION_FAILURE',
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
        dispatch({type: types.GET_LOCATION_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.GET_LOCATION_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  }
};

