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
import type { IdentificationtasksAnnotationsListClassificationTaxonIdsErrorComponentCode } from './identificationtasks-annotations-list-classification-taxon-ids-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListCountryIdErrorComponent } from './observations-list-country-id-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListCreatedAtErrorComponent } from './observations-list-created-at-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListIdentificationTaxonIdsErrorComponent } from './observations-list-identification-taxon-ids-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListIdentificationTaxonIdsErrorComponentAttr } from './observations-list-identification-taxon-ids-error-component-attr';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListOrderByErrorComponent } from './observations-list-order-by-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListReceivedAtErrorComponent } from './observations-list-received-at-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListShortIdErrorComponent } from './observations-list-short-id-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListUpdatedAtErrorComponent } from './observations-list-updated-at-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { ObservationsListUserUuidErrorComponent } from './observations-list-user-uuid-error-component';

/**
 * @type ObservationsListError
 * @export
 */
export type ObservationsListError = { attr: 'country_id' } & ObservationsListCountryIdErrorComponent | { attr: 'created_at' } & ObservationsListCreatedAtErrorComponent | { attr: 'identification_taxon_ids' } & ObservationsListIdentificationTaxonIdsErrorComponent | { attr: 'order_by' } & ObservationsListOrderByErrorComponent | { attr: 'received_at' } & ObservationsListReceivedAtErrorComponent | { attr: 'short_id' } & ObservationsListShortIdErrorComponent | { attr: 'updated_at' } & ObservationsListUpdatedAtErrorComponent | { attr: 'user_uuid' } & ObservationsListUserUuidErrorComponent;


