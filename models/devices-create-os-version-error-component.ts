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
import type { DevicesCreateDeviceIdErrorComponentCode } from './devices-create-device-id-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateOsVersionErrorComponentAttr } from './devices-create-os-version-error-component-attr';

/**
 * 
 * @export
 * @interface DevicesCreateOsVersionErrorComponent
 */
export interface DevicesCreateOsVersionErrorComponent {
    /**
     * 
     * @type {DevicesCreateOsVersionErrorComponentAttr}
     * @memberof DevicesCreateOsVersionErrorComponent
     */
    'attr': DevicesCreateOsVersionErrorComponentAttr;
    /**
     * 
     * @type {DevicesCreateDeviceIdErrorComponentCode}
     * @memberof DevicesCreateOsVersionErrorComponent
     */
    'code': DevicesCreateDeviceIdErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof DevicesCreateOsVersionErrorComponent
     */
    'detail': string;
}



