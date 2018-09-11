import http from '../utils/http';

export default {
  /**
   * Getting list of curriencies
   * @returns {Promise}
   */
  getList: () => {
    return http.get(`api/v6/currencies`);
  },
};
