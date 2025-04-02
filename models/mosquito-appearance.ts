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
import type { MosquitoAppearanceAbdomen } from './mosquito-appearance-abdomen';
// May contain unused imports in some cases
// @ts-ignore
import type { MosquitoAppearanceLegs } from './mosquito-appearance-legs';
// May contain unused imports in some cases
// @ts-ignore
import type { MosquitoAppearanceSpecie } from './mosquito-appearance-specie';
// May contain unused imports in some cases
// @ts-ignore
import type { MosquitoAppearanceThorax } from './mosquito-appearance-thorax';

/**
 * 
 * @export
 * @interface MosquitoAppearance
 */
export interface MosquitoAppearance {
    /**
     * 
     * @type {MosquitoAppearanceSpecie}
     * @memberof MosquitoAppearance
     */
    'specie'?: MosquitoAppearanceSpecie | null;
    /**
     * 
     * @type {MosquitoAppearanceThorax}
     * @memberof MosquitoAppearance
     */
    'thorax'?: MosquitoAppearanceThorax | null;
    /**
     * 
     * @type {MosquitoAppearanceAbdomen}
     * @memberof MosquitoAppearance
     */
    'abdomen'?: MosquitoAppearanceAbdomen | null;
    /**
     * 
     * @type {MosquitoAppearanceLegs}
     * @memberof MosquitoAppearance
     */
    'legs'?: MosquitoAppearanceLegs | null;
}



