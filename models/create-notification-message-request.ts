/* tslint:disable */
/* eslint-disable */
/**
 * Mosquito Alert API
 * Introducing API v1 for Mosquito Alert platform, a project desgined to facilitate citizen science initiatives and enable collaboration among scientists, public health officials, and environmental managers in the investigation and control of disease-carrying mosquitoes.
 *
 * The version of the OpenAPI document: v1
 * Contact: it@mosquitoalert.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { LocalizedMessageBodyRequest } from './localized-message-body-request';
// May contain unused imports in some cases
// @ts-ignore
import type { LocalizedMessageTitleRequest } from './localized-message-title-request';

/**
 * 
 * @export
 * @interface CreateNotificationMessageRequest
 */
export interface CreateNotificationMessageRequest {
    /**
     * Provide the message\'s title in all supported languages
     * @type {LocalizedMessageTitleRequest}
     * @memberof CreateNotificationMessageRequest
     */
    'title': LocalizedMessageTitleRequest;
    /**
     * Provide the message\'s body in all supported languages
     * @type {LocalizedMessageBodyRequest}
     * @memberof CreateNotificationMessageRequest
     */
    'body': LocalizedMessageBodyRequest;
}

