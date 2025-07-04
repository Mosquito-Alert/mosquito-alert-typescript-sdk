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
import type { BoundingBox } from './bounding-box';
// May contain unused imports in some cases
// @ts-ignore
import type { CreatePhotoPredictionClassifierVersion } from './create-photo-prediction-classifier-version';
// May contain unused imports in some cases
// @ts-ignore
import type { CreatePhotoPredictionPredictedClass } from './create-photo-prediction-predicted-class';
// May contain unused imports in some cases
// @ts-ignore
import type { PredictionScore } from './prediction-score';
// May contain unused imports in some cases
// @ts-ignore
import type { SimplePhoto } from './simple-photo';
// May contain unused imports in some cases
// @ts-ignore
import type { SimpleTaxon } from './simple-taxon';

/**
 * 
 * @export
 * @interface CreatePhotoPrediction
 */
export interface CreatePhotoPrediction {
    /**
     * 
     * @type {SimplePhoto}
     * @memberof CreatePhotoPrediction
     */
    'photo': SimplePhoto;
    /**
     * 
     * @type {BoundingBox}
     * @memberof CreatePhotoPrediction
     */
    'bbox': BoundingBox;
    /**
     * Insect confidence
     * @type {number}
     * @memberof CreatePhotoPrediction
     */
    'insect_confidence': number;
    /**
     * 
     * @type {CreatePhotoPredictionPredictedClass}
     * @memberof CreatePhotoPrediction
     */
    'predicted_class': CreatePhotoPredictionPredictedClass | null;
    /**
     * 
     * @type {SimpleTaxon}
     * @memberof CreatePhotoPrediction
     */
    'taxon': SimpleTaxon | null;
    /**
     * 
     * @type {number}
     * @memberof CreatePhotoPrediction
     */
    'threshold_deviation': number;
    /**
     * Indicates if this prediction can close the identification task.
     * @type {boolean}
     * @memberof CreatePhotoPrediction
     */
    'is_decisive'?: boolean;
    /**
     * 
     * @type {PredictionScore}
     * @memberof CreatePhotoPrediction
     */
    'scores': PredictionScore;
    /**
     * 
     * @type {CreatePhotoPredictionClassifierVersion}
     * @memberof CreatePhotoPrediction
     */
    'classifier_version': CreatePhotoPredictionClassifierVersion;
    /**
     * 
     * @type {string}
     * @memberof CreatePhotoPrediction
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePhotoPrediction
     */
    'updated_at': string;
}



