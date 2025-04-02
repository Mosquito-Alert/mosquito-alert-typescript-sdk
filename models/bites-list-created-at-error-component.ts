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
import type { BitesCreateCreatedAtErrorComponentAttr } from './bites-create-created-at-error-component-attr';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesListCreatedAtErrorComponentCode } from './bites-list-created-at-error-component-code';

/**
 * 
 * @export
 * @interface BitesListCreatedAtErrorComponent
 */
export interface BitesListCreatedAtErrorComponent {
    /**
     * 
     * @type {BitesCreateCreatedAtErrorComponentAttr}
     * @memberof BitesListCreatedAtErrorComponent
     */
    'attr': BitesCreateCreatedAtErrorComponentAttr;
    /**
     * 
     * @type {BitesListCreatedAtErrorComponentCode}
     * @memberof BitesListCreatedAtErrorComponent
     */
    'code': BitesListCreatedAtErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof BitesListCreatedAtErrorComponent
     */
    'detail': string;
}



