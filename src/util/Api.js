class Api {

  /**
   * Main api url
   * @type {string}
   */
  static url = 'https://pokeapi.co';

  /**
   * Endpoint to get list of pokemon
   * @type {string}
   */
  static listPokemonApi = Api.url + '/api/v2/pokemon?limit=50&offset=0';

  /**
   * Endpoint to get detail of pokemon
   * @type {string}
   */
  static detailPokemonApi = Api.url + '/api/v2/pokemon/{0}';

  /**
   * Bind parameter to url
   * @param {string} url 
   * @param {...string} param 
   */
  static prepare(url, ...param) {
    let result = url;
    for(let i in param) {
      result = result.replace('{' + i + '}', param[i])
    }
    return result;
  }
}

export default Api;