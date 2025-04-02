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
import type { BitesCreateEventEnvironmentErrorComponentCode } from './bites-create-event-environment-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsCreateMosquitoAppearanceSpecieErrorComponentAttr } from './observations-create-mosquito-appearance-specie-error-component-attr';

/**
 * 
 * @export
 * @interface ObservationsCreateMosquitoAppearanceSpecieErrorComponent
 */
export interface ObservationsCreateMosquitoAppearanceSpecieErrorComponent {
    /**
     * 
     * @type {ObservationsCreateMosquitoAppearanceSpecieErrorComponentAttr}
     * @memberof ObservationsCreateMosquitoAppearanceSpecieErrorComponent
     */
    'attr': ObservationsCreateMosquitoAppearanceSpecieErrorComponentAttr;
    /**
     * 
     * @type {BitesCreateEventEnvironmentErrorComponentCode}
     * @memberof ObservationsCreateMosquitoAppearanceSpecieErrorComponent
     */
    'code': BitesCreateEventEnvironmentErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof ObservationsCreateMosquitoAppearanceSpecieErrorComponent
     */
    'detail': string;
}



