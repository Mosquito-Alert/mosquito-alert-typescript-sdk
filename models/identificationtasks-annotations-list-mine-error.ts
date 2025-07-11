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
import type { IdentificationtasksAnnotationsListMineClassificationConfidenceErrorComponent } from './identificationtasks-annotations-list-mine-classification-confidence-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListMineClassificationConfidenceLabelErrorComponent } from './identificationtasks-annotations-list-mine-classification-confidence-label-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListMineClassificationTaxonIdsErrorComponent } from './identificationtasks-annotations-list-mine-classification-taxon-ids-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListMineCreatedAtErrorComponent } from './identificationtasks-annotations-list-mine-created-at-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListMineOrderByErrorComponent } from './identificationtasks-annotations-list-mine-order-by-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListMineTypeErrorComponent } from './identificationtasks-annotations-list-mine-type-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListMineUpdatedAtErrorComponent } from './identificationtasks-annotations-list-mine-updated-at-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksAnnotationsListMineUserIdsErrorComponent } from './identificationtasks-annotations-list-mine-user-ids-error-component';

/**
 * @type IdentificationtasksAnnotationsListMineError
 * @export
 */
export type IdentificationtasksAnnotationsListMineError = { attr: 'classification_confidence' } & IdentificationtasksAnnotationsListMineClassificationConfidenceErrorComponent | { attr: 'classification_confidence_label' } & IdentificationtasksAnnotationsListMineClassificationConfidenceLabelErrorComponent | { attr: 'classification_taxon_ids' } & IdentificationtasksAnnotationsListMineClassificationTaxonIdsErrorComponent | { attr: 'created_at' } & IdentificationtasksAnnotationsListMineCreatedAtErrorComponent | { attr: 'order_by' } & IdentificationtasksAnnotationsListMineOrderByErrorComponent | { attr: 'type' } & IdentificationtasksAnnotationsListMineTypeErrorComponent | { attr: 'updated_at' } & IdentificationtasksAnnotationsListMineUpdatedAtErrorComponent | { attr: 'user_ids' } & IdentificationtasksAnnotationsListMineUserIdsErrorComponent;


