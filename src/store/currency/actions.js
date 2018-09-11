import currency from '../../api/currency';

export const types = {
  GET_LIST: 'GET_LIST',
  GET_LIST_SUCCESS: 'GET_LIST_SUCCESS',
  GET_LIST_FAILURE: 'GET_LIST_FAILURE',
};

export default {
  getList: () => {
    return async (dispatch) => {
      dispatch({type: types.GET_LIST});

      try {
        const response = await currency.getList();
        const result = response.data.results;
        dispatch({type: types.GET_LIST_SUCCESS, payload: result});
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.GET_LIST_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  }
};

