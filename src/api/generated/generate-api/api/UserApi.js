/**
 * DressUpExchange-API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateUserRequest from '../model/CreateUserRequest';
import SortOrder from '../model/SortOrder';
import UpdateUserRequest from '../model/UpdateUserRequest';
import UserInformationResponseListRestDTO from '../model/UserInformationResponseListRestDTO';
import UserInformationResponseRestDTO from '../model/UserInformationResponseRestDTO';
import UserLoginRequest from '../model/UserLoginRequest';
import UserLoginResponseRestDTO from '../model/UserLoginResponseRestDTO';

/**
* User service.
* @module api/UserApi
* @version v1
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the idGet operation.
     * @callback module:api/UserApi~idGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/UserApi~idGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformationResponseRestDTO}
     */
    idGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling idGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the idPatch operation.
     * @callback module:api/UserApi~idPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateUserRequest} opts.updateUserRequest 
     * @param {module:api/UserApi~idPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformationResponseRestDTO}
     */
    idPatch(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateUserRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling idPatch");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginPost operation.
     * @callback module:api/UserApi~loginPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserLoginResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/UserLoginRequest} opts.userLoginRequest 
     * @param {module:api/UserApi~loginPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserLoginResponseRestDTO}
     */
    loginPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['userLoginRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserLoginResponseRestDTO;
      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/UserApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformationResponseListRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {module:model/SortOrder} opts.sortType 
     * @param {String} opts.colName 
     * @param {String} opts.securityCode 
     * @param {String} opts.email 
     * @param {String} opts.phone 
     * @param {String} opts.status 
     * @param {String} opts.name 
     * @param {module:api/UserApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformationResponseListRestDTO}
     */
    userGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Page': opts['page'],
        'PageSize': opts['pageSize'],
        'SortType': opts['sortType'],
        'ColName': opts['colName'],
        'SecurityCode': opts['securityCode'],
        'Email': opts['email'],
        'Phone': opts['phone'],
        'Status': opts['status'],
        'Name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserInformationResponseListRestDTO;
      return this.apiClient.callApi(
        '/User', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userIdActivePost operation.
     * @callback module:api/UserApi~userIdActivePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/UserApi~userIdActivePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformationResponseRestDTO}
     */
    userIdActivePost(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling userIdActivePost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/User/{id}/active', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userIdInactivePost operation.
     * @callback module:api/UserApi~userIdInactivePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/UserApi~userIdInactivePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformationResponseRestDTO}
     */
    userIdInactivePost(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling userIdInactivePost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/User/{id}/inactive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userPost operation.
     * @callback module:api/UserApi~userPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserRequest} opts.createUserRequest 
     * @param {module:api/UserApi~userPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformationResponseRestDTO}
     */
    userPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['createUserRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/User', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}