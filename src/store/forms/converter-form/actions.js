import { converter } from '../../actions';

export const types = {
  CHANGE: 'VALUES_CHANGE',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  SUBMIT_FAILURE: 'SUBMIT_FAILURE',
};

export default {

  changeValues: (data) => {
    return dispatch => dispatch({type: types.CHANGE, payload: data});
  },

  submit: () => {
    return async (dispatch, getState) => {
      const { amount, firstCurrency, secondCurrency } = getState().converterForm.data;
      try {
        const numberRegExp = /^\d*\.?\d*$/g;
        if (amount && numberRegExp.test(amount) && firstCurrency && secondCurrency) {
          dispatch({type: types.SUBMIT_SUCCESS});
          await dispatch(converter.getRate(firstCurrency, secondCurrency));
        } else {
          const errors = {};
          if (!firstCurrency) {
            errors.firstCurrency = 'Выберите валюту!';
          }
          if (!secondCurrency) {
            errors.secondCurrency = 'Выберите валюту!';
          }
          if (!numberRegExp.test(amount)) {
            errors.amount = 'Разрешается вводить только целые и дробные числа!';
          }
          if (!amount) {
            errors.amount = 'Введите количество!';
          }
          dispatch({type: types.SUBMIT_FAILURE, payload: errors});
        }
      } catch (e) {
        if (e.response && e.response.status < 500) {
          dispatch({type: types.GET_RATE_FAILURE, error: e.response.data.error});
        } else {
          throw e;
        }
      }
    };
  }
};
/*
 changeValues: (data) => {
 return dispatch => {
 const numberRegExp = /^\d*\.?\d*$/g;
 //const isAmountFieldNumber = data.amount.match(numberRegExp);
 const isAmountFieldNumber = numberRegExp.test(data.amount);
 console.log('data.amount', data.amount);
 console.log('isAmountFieldNumber', isAmountFieldNumber);
 if (!data.amount) {
 dispatch({type: types.CHANGE_FAILURE, payload: {amount: 'Разрешается вводить только цифры!'}});
 } else {
 dispatch({type: types.CHANGE, payload: data});
 }
dispatch({type: types.CHANGE, payload: data});
}
},
 */