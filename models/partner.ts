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
import type { LocationPoint } from './location-point';

/**
 * 
 * @export
 * @interface Partner
 */
export interface Partner {
    /**
     * 
     * @type {number}
     * @memberof Partner
     */
    'id': number;
    /**
     * 
     * @type {LocationPoint}
     * @memberof Partner
     */
    'point': LocationPoint;
    /**
     * Text desription on the pin. This text is meant to be visualized as the text body of the dialog on the map
     * @type {string}
     * @memberof Partner
     */
    'description': string;
    /**
     * URL link to the organization page
     * @type {string}
     * @memberof Partner
     */
    'url': string;
}

