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

/**
 * The RecordFollows model module.
 * @module model/RecordFollows
 * @version v1
 */
class RecordFollows {
    /**
     * Constructs a new <code>RecordFollows</code>.
     * @alias module:model/RecordFollows
     */
    constructor() { 
        
        RecordFollows.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecordFollows</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecordFollows} obj Optional instance to populate.
     * @return {module:model/RecordFollows} The populated <code>RecordFollows</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecordFollows();

            if (data.hasOwnProperty('recordId')) {
                obj['recordId'] = ApiClient.convertToType(data['recordId'], 'String');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('recordTypeId')) {
                obj['recordTypeId'] = ApiClient.convertToType(data['recordTypeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} recordId
 */
RecordFollows.prototype['recordId'] = undefined;

/**
 * @member {Date} createdDate
 */
RecordFollows.prototype['createdDate'] = undefined;

/**
 * @member {Number} recordTypeId
 */
RecordFollows.prototype['recordTypeId'] = undefined;






export default RecordFollows;
