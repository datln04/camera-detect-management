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


import ApiClient from './ApiClient';
import ActionProcessResponseRestDTO from './model/ActionProcessResponseRestDTO';
import ActionType from './model/ActionType';
import AddCameraRequest from './model/AddCameraRequest';
import AddLocationRequest from './model/AddLocationRequest';
import AddNotificationRequest from './model/AddNotificationRequest';
import AddRecordActionRequest from './model/AddRecordActionRequest';
import AddStaffRequest from './model/AddStaffRequest';
import AlarmRate from './model/AlarmRate';
import Camera from './model/Camera';
import CameraInformationResponse from './model/CameraInformationResponse';
import CameraInformationResponseIQueryableRestDTO from './model/CameraInformationResponseIQueryableRestDTO';
import CameraInformationResponseRestDTO from './model/CameraInformationResponseRestDTO';
import ControlCamera from './model/ControlCamera';
import CreateUserRequest from './model/CreateUserRequest';
import DetectResponse from './model/DetectResponse';
import DetectResponseRestDTO from './model/DetectResponseRestDTO';
import ImageRecord from './model/ImageRecord';
import Level from './model/Level';
import LinkDTO from './model/LinkDTO';
import Location from './model/Location';
import LocationIQueryableRestDTO from './model/LocationIQueryableRestDTO';
import LocationInformationResponse from './model/LocationInformationResponse';
import LocationInformationResponseRestDTO from './model/LocationInformationResponseRestDTO';
import MediaRecord from './model/MediaRecord';
import MediaType from './model/MediaType';
import NotficationDetailResponse from './model/NotficationDetailResponse';
import NotficationDetailResponseRestDTO from './model/NotficationDetailResponseRestDTO';
import NotificationListResponse from './model/NotificationListResponse';
import NotificationListResponseRestDTO from './model/NotificationListResponseRestDTO';
import RateAlarmRequest from './model/RateAlarmRequest';
import Record from './model/Record';
import RecordDetailResponse from './model/RecordDetailResponse';
import RecordDetailResponseRestDTO from './model/RecordDetailResponseRestDTO';
import RecordFollows from './model/RecordFollows';
import RecordProcess from './model/RecordProcess';
import RecordResponse from './model/RecordResponse';
import RecordResponsePagedResult from './model/RecordResponsePagedResult';
import RecordResponsePagedResultRestDTO from './model/RecordResponsePagedResultRestDTO';
import RecordType from './model/RecordType';
import Role from './model/Role';
import RoleResponse from './model/RoleResponse';
import SortOrder from './model/SortOrder';
import TakeAlarmRequest from './model/TakeAlarmRequest';
import TakeElectricalIncidentRequest from './model/TakeElectricalIncidentRequest';
import UpdateUserRequest from './model/UpdateUserRequest';
import User from './model/User';
import UserInformationResponse from './model/UserInformationResponse';
import UserInformationResponseListRestDTO from './model/UserInformationResponseListRestDTO';
import UserInformationResponseRestDTO from './model/UserInformationResponseRestDTO';
import UserLoginRequest from './model/UserLoginRequest';
import UserLoginResponse from './model/UserLoginResponse';
import UserLoginResponseRestDTO from './model/UserLoginResponseRestDTO';
import UserRating from './model/UserRating';
import UserVoting from './model/UserVoting';
import VideoRecord from './model/VideoRecord';
import VoteAlarmResponse from './model/VoteAlarmResponse';
import VoteAlarmResponseRestDTO from './model/VoteAlarmResponseRestDTO';
import CameraApi from './api/CameraApi';
import LocationApi from './api/LocationApi';
import NotificationApi from './api/NotificationApi';
import RecordApi from './api/RecordApi';
import UserApi from './api/UserApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DressUpExchangeApi = require('index'); // See note below*.
* var xxxSvc = new DressUpExchangeApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DressUpExchangeApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DressUpExchangeApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DressUpExchangeApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ActionProcessResponseRestDTO model constructor.
     * @property {module:model/ActionProcessResponseRestDTO}
     */
    ActionProcessResponseRestDTO,

    /**
     * The ActionType model constructor.
     * @property {module:model/ActionType}
     */
    ActionType,

    /**
     * The AddCameraRequest model constructor.
     * @property {module:model/AddCameraRequest}
     */
    AddCameraRequest,

    /**
     * The AddLocationRequest model constructor.
     * @property {module:model/AddLocationRequest}
     */
    AddLocationRequest,

    /**
     * The AddNotificationRequest model constructor.
     * @property {module:model/AddNotificationRequest}
     */
    AddNotificationRequest,

    /**
     * The AddRecordActionRequest model constructor.
     * @property {module:model/AddRecordActionRequest}
     */
    AddRecordActionRequest,

    /**
     * The AddStaffRequest model constructor.
     * @property {module:model/AddStaffRequest}
     */
    AddStaffRequest,

    /**
     * The AlarmRate model constructor.
     * @property {module:model/AlarmRate}
     */
    AlarmRate,

    /**
     * The Camera model constructor.
     * @property {module:model/Camera}
     */
    Camera,

    /**
     * The CameraInformationResponse model constructor.
     * @property {module:model/CameraInformationResponse}
     */
    CameraInformationResponse,

    /**
     * The CameraInformationResponseIQueryableRestDTO model constructor.
     * @property {module:model/CameraInformationResponseIQueryableRestDTO}
     */
    CameraInformationResponseIQueryableRestDTO,

    /**
     * The CameraInformationResponseRestDTO model constructor.
     * @property {module:model/CameraInformationResponseRestDTO}
     */
    CameraInformationResponseRestDTO,

    /**
     * The ControlCamera model constructor.
     * @property {module:model/ControlCamera}
     */
    ControlCamera,

    /**
     * The CreateUserRequest model constructor.
     * @property {module:model/CreateUserRequest}
     */
    CreateUserRequest,

    /**
     * The DetectResponse model constructor.
     * @property {module:model/DetectResponse}
     */
    DetectResponse,

    /**
     * The DetectResponseRestDTO model constructor.
     * @property {module:model/DetectResponseRestDTO}
     */
    DetectResponseRestDTO,

    /**
     * The ImageRecord model constructor.
     * @property {module:model/ImageRecord}
     */
    ImageRecord,

    /**
     * The Level model constructor.
     * @property {module:model/Level}
     */
    Level,

    /**
     * The LinkDTO model constructor.
     * @property {module:model/LinkDTO}
     */
    LinkDTO,

    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location,

    /**
     * The LocationIQueryableRestDTO model constructor.
     * @property {module:model/LocationIQueryableRestDTO}
     */
    LocationIQueryableRestDTO,

    /**
     * The LocationInformationResponse model constructor.
     * @property {module:model/LocationInformationResponse}
     */
    LocationInformationResponse,

    /**
     * The LocationInformationResponseRestDTO model constructor.
     * @property {module:model/LocationInformationResponseRestDTO}
     */
    LocationInformationResponseRestDTO,

    /**
     * The MediaRecord model constructor.
     * @property {module:model/MediaRecord}
     */
    MediaRecord,

    /**
     * The MediaType model constructor.
     * @property {module:model/MediaType}
     */
    MediaType,

    /**
     * The NotficationDetailResponse model constructor.
     * @property {module:model/NotficationDetailResponse}
     */
    NotficationDetailResponse,

    /**
     * The NotficationDetailResponseRestDTO model constructor.
     * @property {module:model/NotficationDetailResponseRestDTO}
     */
    NotficationDetailResponseRestDTO,

    /**
     * The NotificationListResponse model constructor.
     * @property {module:model/NotificationListResponse}
     */
    NotificationListResponse,

    /**
     * The NotificationListResponseRestDTO model constructor.
     * @property {module:model/NotificationListResponseRestDTO}
     */
    NotificationListResponseRestDTO,

    /**
     * The RateAlarmRequest model constructor.
     * @property {module:model/RateAlarmRequest}
     */
    RateAlarmRequest,

    /**
     * The Record model constructor.
     * @property {module:model/Record}
     */
    Record,

    /**
     * The RecordDetailResponse model constructor.
     * @property {module:model/RecordDetailResponse}
     */
    RecordDetailResponse,

    /**
     * The RecordDetailResponseRestDTO model constructor.
     * @property {module:model/RecordDetailResponseRestDTO}
     */
    RecordDetailResponseRestDTO,

    /**
     * The RecordFollows model constructor.
     * @property {module:model/RecordFollows}
     */
    RecordFollows,

    /**
     * The RecordProcess model constructor.
     * @property {module:model/RecordProcess}
     */
    RecordProcess,

    /**
     * The RecordResponse model constructor.
     * @property {module:model/RecordResponse}
     */
    RecordResponse,

    /**
     * The RecordResponsePagedResult model constructor.
     * @property {module:model/RecordResponsePagedResult}
     */
    RecordResponsePagedResult,

    /**
     * The RecordResponsePagedResultRestDTO model constructor.
     * @property {module:model/RecordResponsePagedResultRestDTO}
     */
    RecordResponsePagedResultRestDTO,

    /**
     * The RecordType model constructor.
     * @property {module:model/RecordType}
     */
    RecordType,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The RoleResponse model constructor.
     * @property {module:model/RoleResponse}
     */
    RoleResponse,

    /**
     * The SortOrder model constructor.
     * @property {module:model/SortOrder}
     */
    SortOrder,

    /**
     * The TakeAlarmRequest model constructor.
     * @property {module:model/TakeAlarmRequest}
     */
    TakeAlarmRequest,

    /**
     * The TakeElectricalIncidentRequest model constructor.
     * @property {module:model/TakeElectricalIncidentRequest}
     */
    TakeElectricalIncidentRequest,

    /**
     * The UpdateUserRequest model constructor.
     * @property {module:model/UpdateUserRequest}
     */
    UpdateUserRequest,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserInformationResponse model constructor.
     * @property {module:model/UserInformationResponse}
     */
    UserInformationResponse,

    /**
     * The UserInformationResponseListRestDTO model constructor.
     * @property {module:model/UserInformationResponseListRestDTO}
     */
    UserInformationResponseListRestDTO,

    /**
     * The UserInformationResponseRestDTO model constructor.
     * @property {module:model/UserInformationResponseRestDTO}
     */
    UserInformationResponseRestDTO,

    /**
     * The UserLoginRequest model constructor.
     * @property {module:model/UserLoginRequest}
     */
    UserLoginRequest,

    /**
     * The UserLoginResponse model constructor.
     * @property {module:model/UserLoginResponse}
     */
    UserLoginResponse,

    /**
     * The UserLoginResponseRestDTO model constructor.
     * @property {module:model/UserLoginResponseRestDTO}
     */
    UserLoginResponseRestDTO,

    /**
     * The UserRating model constructor.
     * @property {module:model/UserRating}
     */
    UserRating,

    /**
     * The UserVoting model constructor.
     * @property {module:model/UserVoting}
     */
    UserVoting,

    /**
     * The VideoRecord model constructor.
     * @property {module:model/VideoRecord}
     */
    VideoRecord,

    /**
     * The VoteAlarmResponse model constructor.
     * @property {module:model/VoteAlarmResponse}
     */
    VoteAlarmResponse,

    /**
     * The VoteAlarmResponseRestDTO model constructor.
     * @property {module:model/VoteAlarmResponseRestDTO}
     */
    VoteAlarmResponseRestDTO,

    /**
    * The CameraApi service constructor.
    * @property {module:api/CameraApi}
    */
    CameraApi,

    /**
    * The LocationApi service constructor.
    * @property {module:api/LocationApi}
    */
    LocationApi,

    /**
    * The NotificationApi service constructor.
    * @property {module:api/NotificationApi}
    */
    NotificationApi,

    /**
    * The RecordApi service constructor.
    * @property {module:api/RecordApi}
    */
    RecordApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
