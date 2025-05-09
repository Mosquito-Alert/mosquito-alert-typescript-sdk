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
import type { IdentificationtasksAnnotationsListClassificationTaxonIdsErrorComponentCode } from './identificationtasks-annotations-list-classification-taxon-ids-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksListAnnotatorIdsErrorComponentAttr } from './identificationtasks-list-annotator-ids-error-component-attr';

/**
 * 
 * @export
 * @interface IdentificationtasksListMineAnnotatorIdsErrorComponent
 */
export interface IdentificationtasksListMineAnnotatorIdsErrorComponent {
    /**
     * 
     * @type {IdentificationtasksListAnnotatorIdsErrorComponentAttr}
     * @memberof IdentificationtasksListMineAnnotatorIdsErrorComponent
     */
    'attr': IdentificationtasksListAnnotatorIdsErrorComponentAttr;
    /**
     * 
     * @type {IdentificationtasksAnnotationsListClassificationTaxonIdsErrorComponentCode}
     * @memberof IdentificationtasksListMineAnnotatorIdsErrorComponent
     */
    'code': IdentificationtasksAnnotationsListClassificationTaxonIdsErrorComponentCode;
    /**
     * 
     * @type {string}
     * @memberof IdentificationtasksListMineAnnotatorIdsErrorComponent
     */
    'detail': string;
}



