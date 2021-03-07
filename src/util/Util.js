class Util {

  /**
   * Create http get request
   * @param {string} url 
   * @returns {Promise}
   */
  static httpGet(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url, { method: "GET" });
        resolve(response.json());
      } catch(err) {
        reject(err);
      }
    })
  }

  /**
   * Create http post request
   * @param {string} url
   * @returns {Promise}
   */
  static httpPost(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url, { method: "POST" });
        resolve(response.json());
      } catch(err) {
        reject(err);
      }
    })
  }
}

export default Util;