import Api from "./Api";
import Util from "./Util";

class Net {

  /**
   * Get list of pokemon with http get call
   * @returns {Promise}
   */
  static getPokemonList() {
    return Util.httpGet(Api.listPokemonApi);
  }

  /**
   * Get detail information of pokemon base on name
   * @param {...string} param 
   * @returns {Promise}
   */
  static getPokemonDetail(...param) {
    const url = Api.prepare(Api.detailPokemonApi, param)
    return Util.httpGet(url);
  }
}

export default Net;