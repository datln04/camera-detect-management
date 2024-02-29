import Cookies from "js-cookie";
import { SERVER_URL } from "../../util/Constant";
import ApiClient from "./generate-api/ApiClient";

const ApiClientSingleton = (function () {
    var instance;
    const apiNoAuth = [];
  
    function createInstance() {
      var object = new ApiClient(SERVER_URL);
      object.applyAuthToRequest = (request, authNames) => {
        if (!apiNoAuth.includes(subString(request.url))) {
          request.set({ Authorization: 'Bearer ' + Cookies.get('token') });
        }
      };
      return object;
    }
  
    function subString(url) {
      return url.substring(SERVER_URL.length, url.length);
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
  
  export default ApiClientSingleton;