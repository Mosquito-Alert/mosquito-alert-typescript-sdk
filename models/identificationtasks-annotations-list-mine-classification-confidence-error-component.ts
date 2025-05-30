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
import type { BitesListCreatedAtErrorComponentCode } from './bites-list-created-at-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListClassificationConfidenceErrorComponentAttr } from './identificationtasks-annotations-list-classification-confidence-error-component-attr';

/**
 * 
 * @export
 * @interface IdentificationtasksAnnotationsListMineClassificationConfidenceErrorComponent
 */
export interface IdentificationtasksAnnotationsListMineClassificationConfidenceErrorComponent {
    /**
     * 
     * @type {IdentificationtasksAnnotationsListClassificationConfidenceErrorComponentAttr}
     * @memberof IdentificationtasksAnnotationsListMineClassificationConfidenceErrorComponent
     */
    'attr': IdentificationtasksAnnotationsListClassificationConfidenceErrorComponentAttr;
    /**
     * 
     * @type {BitesListCreatedAtErrorComponentCode}
     * @memberof IdentificationtasksAnnotationsListMineClassificationConfidenceErrorComponent
     */
    'code': BitesListCreatedAtErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof IdentificationtasksAnnotationsListMineClassificationConfidenceErrorComponent
     */
    'detail': string;
}



