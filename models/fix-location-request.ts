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
 * @interface FixLocationRequest
 */
export interface FixLocationRequest {
    /**
     * Latitude rounded down to nearest 0.025 decimal degree.
     * @type {number}
     * @memberof FixLocationRequest
     */
    'latitude': number;
    /**
     * Longitude rounded down to nearest 0.025 decimal degree.
     * @type {number}
     * @memberof FixLocationRequest
     */
    'longitude': number;
}

