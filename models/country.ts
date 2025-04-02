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
 * @interface Country
 */
export interface Country {
    /**
     * 
     * @type {number}
     * @memberof Country
     */
    'id': number;
    /**
     * Full name of the country in English (e.g., Spain).
     * @type {string}
     * @memberof Country
     */
    'name_en': string;
    /**
     * ISO 3166-1 alpha-3 country code (3-letter code, e.g., ESP).
     * @type {string}
     * @memberof Country
     */
    'iso3_code': string;
}

