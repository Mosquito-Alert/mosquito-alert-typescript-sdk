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
import type { IdentificationTaskResultSource } from './identification-task-result-source';
// May contain unused imports in some cases
// @ts-ignore
import type { SimpleTaxon } from './simple-taxon';

/**
 * 
 * @export
 * @interface IdentificationTaskResult
 */
export interface IdentificationTaskResult {
    /**
     * 
     * @type {IdentificationTaskResultSource}
     * @memberof IdentificationTaskResult
     */
    'source': IdentificationTaskResultSource;
    /**
     * 
     * @type {SimpleTaxon}
     * @memberof IdentificationTaskResult
     */
    'taxon': SimpleTaxon | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentificationTaskResult
     */
    'is_high_confidence': boolean;
    /**
     * 
     * @type {number}
     * @memberof IdentificationTaskResult
     */
    'confidence': number;
    /**
     * 
     * @type {string}
     * @memberof IdentificationTaskResult
     */
    'confidence_label': string;
    /**
     * 
     * @type {number}
     * @memberof IdentificationTaskResult
     */
    'uncertainty': number;
    /**
     * 
     * @type {number}
     * @memberof IdentificationTaskResult
     */
    'agreement': number;
}



