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
import type { IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponentAttr } from './identificationtasks-annotations-list-classification-confidence-label-error-component-attr';

/**
 * 
 * @export
 * @interface IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponent
 */
export interface IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponent {
    /**
     * 
     * @type {IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponentAttr}
     * @memberof IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponent
     */
    'attr': IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponentAttr;
    /**
     * 
     * @type {BitesCreateEventEnvironmentErrorComponentCode}
     * @memberof IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponent
     */
    'code': BitesCreateEventEnvironmentErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponent
     */
    'detail': string;
}



