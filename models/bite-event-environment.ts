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



/**
 * The environment where the event took place.
 * @export
 * @enum {string}
 */

export const BiteEventEnvironment = {
    Indoors: 'indoors',
    Outdoors: 'outdoors',
    Vehicle: 'vehicle',
    Empty: '',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type BiteEventEnvironment = typeof BiteEventEnvironment[keyof typeof BiteEventEnvironment];



