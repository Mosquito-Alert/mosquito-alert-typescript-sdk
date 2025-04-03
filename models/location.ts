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
import type { AdmBoundary } from './adm-boundary';
// May contain unused imports in some cases
// @ts-ignore
import type { Country } from './country';
// May contain unused imports in some cases
// @ts-ignore
import type { LocationPoint } from './location-point';
// May contain unused imports in some cases
// @ts-ignore
import type { LocationSource } from './location-source';
// May contain unused imports in some cases
// @ts-ignore
import type { LocationTimezone } from './location-timezone';

/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {LocationSource}
     * @memberof Location
     */
    'source': LocationSource;
    /**
     * 
     * @type {LocationPoint}
     * @memberof Location
     */
    'point': LocationPoint;
    /**
     * 
     * @type {LocationTimezone}
     * @memberof Location
     */
    'timezone': LocationTimezone | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'display_name': string | null;
    /**
     * 
     * @type {Country}
     * @memberof Location
     */
    'country': Country | null;
    /**
     * 
     * @type {Array<AdmBoundary>}
     * @memberof Location
     */
    'adm_boundaries': Array<AdmBoundary>;
}



