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
import LinkDTO from './LinkDTO';
import VoteAlarmResponse from './VoteAlarmResponse';

/**
 * The VoteAlarmResponseRestDTO model module.
 * @module model/VoteAlarmResponseRestDTO
 * @version v1
 */
class VoteAlarmResponseRestDTO {
    /**
     * Constructs a new <code>VoteAlarmResponseRestDTO</code>.
     * @alias module:model/VoteAlarmResponseRestDTO
     */
    constructor() { 
        
        VoteAlarmResponseRestDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VoteAlarmResponseRestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoteAlarmResponseRestDTO} obj Optional instance to populate.
     * @return {module:model/VoteAlarmResponseRestDTO} The populated <code>VoteAlarmResponseRestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoteAlarmResponseRestDTO();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = VoteAlarmResponse.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [LinkDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
VoteAlarmResponseRestDTO.prototype['message'] = undefined;

/**
 * @member {module:model/VoteAlarmResponse} data
 */
VoteAlarmResponseRestDTO.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/LinkDTO>} links
 */
VoteAlarmResponseRestDTO.prototype['links'] = undefined;






export default VoteAlarmResponseRestDTO;
