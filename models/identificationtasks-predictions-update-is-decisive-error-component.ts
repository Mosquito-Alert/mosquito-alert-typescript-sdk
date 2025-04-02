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
import type { AuthChangePasswordNonFieldErrorsErrorComponentCode } from './auth-change-password-non-field-errors-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksPredictionsCreateIsDecisiveErrorComponentAttr } from './identificationtasks-predictions-create-is-decisive-error-component-attr';

/**
 * 
 * @export
 * @interface IdentificationtasksPredictionsUpdateIsDecisiveErrorComponent
 */
export interface IdentificationtasksPredictionsUpdateIsDecisiveErrorComponent {
    /**
     * 
     * @type {IdentificationtasksPredictionsCreateIsDecisiveErrorComponentAttr}
     * @memberof IdentificationtasksPredictionsUpdateIsDecisiveErrorComponent
     */
    'attr': IdentificationtasksPredictionsCreateIsDecisiveErrorComponentAttr;
    /**
     * 
     * @type {AuthChangePasswordNonFieldErrorsErrorComponentCode}
     * @memberof IdentificationtasksPredictionsUpdateIsDecisiveErrorComponent
     */
    'code': AuthChangePasswordNonFieldErrorsErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof IdentificationtasksPredictionsUpdateIsDecisiveErrorComponent
     */
    'detail': string;
}



