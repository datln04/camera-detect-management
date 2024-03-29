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

import ApiClient from '../ApiClient';
import Location from './Location';
import User from './User';

/**
 * The ControlCamera model module.
 * @module model/ControlCamera
 * @version v1
 */
class ControlCamera {
    /**
     * Constructs a new <code>ControlCamera</code>.
     * @alias module:model/ControlCamera
     */
    constructor() { 
        
        ControlCamera.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ControlCamera</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ControlCamera} obj Optional instance to populate.
     * @return {module:model/ControlCamera} The populated <code>ControlCamera</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ControlCamera();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('userID')) {
                obj['userID'] = ApiClient.convertToType(data['userID'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = Location.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('locationID')) {
                obj['locationID'] = ApiClient.convertToType(data['locationID'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ControlCamera.prototype['id'] = undefined;

/**
 * @member {module:model/User} user
 */
ControlCamera.prototype['user'] = undefined;

/**
 * @member {String} userID
 */
ControlCamera.prototype['userID'] = undefined;

/**
 * @member {module:model/Location} location
 */
ControlCamera.prototype['location'] = undefined;

/**
 * @member {String} locationID
 */
ControlCamera.prototype['locationID'] = undefined;






export default ControlCamera;

