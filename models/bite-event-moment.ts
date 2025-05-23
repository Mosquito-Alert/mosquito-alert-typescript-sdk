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
 * The moment of the day when the event took place.
 * @export
 * @enum {string}
 */

export const BiteEventMoment = {
    Now: 'now',
    LastMorning: 'last_morning',
    LastMidday: 'last_midday',
    LastAfternoon: 'last_afternoon',
    LastNight: 'last_night',
    Empty: '',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type BiteEventMoment = typeof BiteEventMoment[keyof typeof BiteEventMoment];



