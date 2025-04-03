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
import type { IdentificationtasksPredictionsCreateBboxXMaxErrorComponentCode } from './identificationtasks-predictions-create-bbox-xmax-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksPredictionsCreateInsectConfidenceErrorComponentAttr } from './identificationtasks-predictions-create-insect-confidence-error-component-attr';

/**
 * 
 * @export
 * @interface PhotosPredictionUpdateInsectConfidenceErrorComponent
 */
export interface PhotosPredictionUpdateInsectConfidenceErrorComponent {
    /**
     * 
     * @type {IdentificationtasksPredictionsCreateInsectConfidenceErrorComponentAttr}
     * @memberof PhotosPredictionUpdateInsectConfidenceErrorComponent
     */
    'attr': IdentificationtasksPredictionsCreateInsectConfidenceErrorComponentAttr;
    /**
     * 
     * @type {IdentificationtasksPredictionsCreateBboxXMaxErrorComponentCode}
     * @memberof PhotosPredictionUpdateInsectConfidenceErrorComponent
     */
    'code': IdentificationtasksPredictionsCreateBboxXMaxErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof PhotosPredictionUpdateInsectConfidenceErrorComponent
     */
    'detail': string;
}



