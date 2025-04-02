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
 * The species of mosquito that the abdomen resembles, according to the user.
 * @export
 * @enum {string}
 */

export const MosquitoAppearanceAbdomen = {
    Albopictus: 'albopictus',
    Aegypti: 'aegypti',
    Japonicus: 'japonicus',
    Koreicus: 'koreicus',
    Culex: 'culex',
    Other: 'other',
    Empty: '',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type MosquitoAppearanceAbdomen = typeof MosquitoAppearanceAbdomen[keyof typeof MosquitoAppearanceAbdomen];



