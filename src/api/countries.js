import http from '../utils/http';

export default {
  /**
   * Getting list of countries
   * @returns {Promise}
   */
  getList: () => {
    return http.get(`api/v6/countries`);
  }
};
