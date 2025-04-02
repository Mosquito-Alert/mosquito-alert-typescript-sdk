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
import type { BitesCreateCountsNonFieldErrorsErrorComponentCode } from './bites-create-counts-non-field-errors-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateOsNonFieldErrorsErrorComponentAttr } from './devices-create-os-non-field-errors-error-component-attr';

/**
 * 
 * @export
 * @interface DevicesPartialUpdateOsNonFieldErrorsErrorComponent
 */
export interface DevicesPartialUpdateOsNonFieldErrorsErrorComponent {
    /**
     * 
     * @type {DevicesCreateOsNonFieldErrorsErrorComponentAttr}
     * @memberof DevicesPartialUpdateOsNonFieldErrorsErrorComponent
     */
    'attr': DevicesCreateOsNonFieldErrorsErrorComponentAttr;
    /**
     * 
     * @type {BitesCreateCountsNonFieldErrorsErrorComponentCode}
     * @memberof DevicesPartialUpdateOsNonFieldErrorsErrorComponent
     */
    'code': BitesCreateCountsNonFieldErrorsErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof DevicesPartialUpdateOsNonFieldErrorsErrorComponent
     */
    'detail': string;
}



