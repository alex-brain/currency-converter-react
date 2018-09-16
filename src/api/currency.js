import http from '../utils/http';

export default {

  getRates: (userCurrency) => {
    return http.get(`https://api.exchangeratesapi.io/latest?base=${userCurrency}`);
  },

  getRate: (firstCurrency, secondCurrency) => {
    return http.get(`https://api.exchangeratesapi.io/latest?base=${firstCurrency}&symbols=${secondCurrency}`);
  }
};
