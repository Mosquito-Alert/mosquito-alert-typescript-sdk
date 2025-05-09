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
import type { AnnotationClassificationConfidenceLabel } from './annotation-classification-confidence-label';
// May contain unused imports in some cases
// @ts-ignore
import type { SimpleTaxon } from './simple-taxon';

/**
 * 
 * @export
 * @interface AnnotationClassification
 */
export interface AnnotationClassification {
    /**
     * 
     * @type {SimpleTaxon}
     * @memberof AnnotationClassification
     */
    'taxon': SimpleTaxon;
    /**
     * 
     * @type {number}
     * @memberof AnnotationClassification
     */
    'confidence': number;
    /**
     * 
     * @type {AnnotationClassificationConfidenceLabel}
     * @memberof AnnotationClassification
     */
    'confidence_label': AnnotationClassificationConfidenceLabel;
    /**
     * 
     * @type {boolean}
     * @memberof AnnotationClassification
     */
    'is_high_confidence': boolean;
}



