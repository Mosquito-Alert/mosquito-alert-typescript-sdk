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



/**
 * 
 * @export
 * @interface BiteCountsRequest
 */
export interface BiteCountsRequest {
    /**
     * Number of bites reported in the head.
     * @type {number}
     * @memberof BiteCountsRequest
     */
    'head'?: number;
    /**
     * Number of bites reported in the left arm.
     * @type {number}
     * @memberof BiteCountsRequest
     */
    'left_arm'?: number;
    /**
     * Number of bites reported in the right arm.
     * @type {number}
     * @memberof BiteCountsRequest
     */
    'right_arm'?: number;
    /**
     * Number of bites reported in the chest.
     * @type {number}
     * @memberof BiteCountsRequest
     */
    'chest'?: number;
    /**
     * Number of bites reported in the left leg.
     * @type {number}
     * @memberof BiteCountsRequest
     */
    'left_leg'?: number;
    /**
     * Number of bites reported in the right leg.
     * @type {number}
     * @memberof BiteCountsRequest
     */
    'right_leg'?: number;
}

