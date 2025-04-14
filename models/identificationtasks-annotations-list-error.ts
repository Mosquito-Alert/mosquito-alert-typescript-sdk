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
import type { BitesCreateEventEnvironmentErrorComponentCode } from './bites-create-event-environment-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesListMineOrderByErrorComponentAttr } from './bites-list-mine-order-by-error-component-attr';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListClassificationConfidenceErrorComponent } from './identificationtasks-annotations-list-classification-confidence-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponent } from './identificationtasks-annotations-list-classification-confidence-label-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListClassificationTaxonIdsErrorComponent } from './identificationtasks-annotations-list-classification-taxon-ids-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListOrderByErrorComponent } from './identificationtasks-annotations-list-order-by-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListUserIdsErrorComponent } from './identificationtasks-annotations-list-user-ids-error-component';

/**
 * @type IdentificationtasksAnnotationsListError
 * @export
 */
export type IdentificationtasksAnnotationsListError = { attr: 'classification_confidence' } & IdentificationtasksAnnotationsListClassificationConfidenceErrorComponent | { attr: 'classification_confidence_label' } & IdentificationtasksAnnotationsListClassificationConfidenceLabelErrorComponent | { attr: 'classification_taxon_ids' } & IdentificationtasksAnnotationsListClassificationTaxonIdsErrorComponent | { attr: 'order_by' } & IdentificationtasksAnnotationsListOrderByErrorComponent | { attr: 'user_ids' } & IdentificationtasksAnnotationsListUserIdsErrorComponent;


