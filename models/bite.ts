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
import type { BiteCounts } from './bite-counts';
// May contain unused imports in some cases
// @ts-ignore
import type { BiteEventEnvironment } from './bite-event-environment';
// May contain unused imports in some cases
// @ts-ignore
import type { BiteEventMoment } from './bite-event-moment';
// May contain unused imports in some cases
// @ts-ignore
import type { Location } from './location';

/**
 * 
 * @export
 * @interface Bite
 */
export interface Bite {
    /**
     * 
     * @type {string}
     * @memberof Bite
     */
    'uuid': string;
    /**
     * 
     * @type {string}
     * @memberof Bite
     */
    'short_id': string;
    /**
     * 
     * @type {string}
     * @memberof Bite
     */
    'user_uuid': string;
    /**
     * 
     * @type {string}
     * @memberof Bite
     */
    'created_at': string;
    /**
     * The date and time when the record was created, displayed in the local timezone specified for this entry.
     * @type {string}
     * @memberof Bite
     */
    'created_at_local': string;
    /**
     * 
     * @type {string}
     * @memberof Bite
     */
    'sent_at': string;
    /**
     * 
     * @type {string}
     * @memberof Bite
     */
    'received_at': string;
    /**
     * Date and time when the report was last modified
     * @type {string}
     * @memberof Bite
     */
    'updated_at': string;
    /**
     * 
     * @type {Location}
     * @memberof Bite
     */
    'location': Location;
    /**
     * Note user attached to report.
     * @type {string}
     * @memberof Bite
     */
    'note'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Bite
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof Bite
     */
    'published': boolean;
    /**
     * 
     * @type {BiteEventEnvironment}
     * @memberof Bite
     */
    'event_environment'?: BiteEventEnvironment | null;
    /**
     * 
     * @type {BiteEventMoment}
     * @memberof Bite
     */
    'event_moment'?: BiteEventMoment | null;
    /**
     * 
     * @type {BiteCounts}
     * @memberof Bite
     */
    'counts': BiteCounts;
}



