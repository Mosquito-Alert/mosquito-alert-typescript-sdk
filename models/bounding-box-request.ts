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
 * 
 * @export
 * @interface BoundingBoxRequest
 */
export interface BoundingBoxRequest {
    /**
     * photo bounding box relative coordinates top left x
     * @type {number}
     * @memberof BoundingBoxRequest
     */
    'x_min': number;
    /**
     * photo bounding box relative coordinates top left y
     * @type {number}
     * @memberof BoundingBoxRequest
     */
    'y_min': number;
    /**
     * photo bounding box relative coordinates bottom right x
     * @type {number}
     * @memberof BoundingBoxRequest
     */
    'x_max': number;
    /**
     * photo bounding box relative coordinates bottom right y
     * @type {number}
     * @memberof BoundingBoxRequest
     */
    'y_max': number;
}

