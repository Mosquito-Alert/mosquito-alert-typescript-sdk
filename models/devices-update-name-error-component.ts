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
import type { DevicesCreateManufacturerErrorComponentCode } from './devices-create-manufacturer-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateNameErrorComponentAttr } from './devices-create-name-error-component-attr';

/**
 * 
 * @export
 * @interface DevicesUpdateNameErrorComponent
 */
export interface DevicesUpdateNameErrorComponent {
    /**
     * 
     * @type {DevicesCreateNameErrorComponentAttr}
     * @memberof DevicesUpdateNameErrorComponent
     */
    'attr': DevicesCreateNameErrorComponentAttr;
    /**
     * 
     * @type {DevicesCreateManufacturerErrorComponentCode}
     * @memberof DevicesUpdateNameErrorComponent
     */
    'code': DevicesCreateManufacturerErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof DevicesUpdateNameErrorComponent
     */
    'detail': string;
}



