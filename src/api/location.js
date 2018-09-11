import http from '../utils/http';

export default {
  /**
   * Getting list of curriencies
   * @returns {Promise}
   */
  getLocation: () => {
    return http.get(`http://ip-api.com/json`);
  },
};
