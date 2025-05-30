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
 * @interface Campaign
 */
export interface Campaign {
    /**
     * 
     * @type {number}
     * @memberof Campaign
     */
    'id': number;
    /**
     * Country in which the campaign is taking place
     * @type {number}
     * @memberof Campaign
     */
    'country_id': number;
    /**
     * Full posting address of the place where the samples will be sent
     * @type {string}
     * @memberof Campaign
     */
    'posting_address': string;
    /**
     * Date when the campaign starts. No samples should be collected BEFORE this date.
     * @type {string}
     * @memberof Campaign
     */
    'start_date': string;
    /**
     * Date when the campaign ends. No samples should be collected AFTER this date.
     * @type {string}
     * @memberof Campaign
     */
    'end_date': string;
}

