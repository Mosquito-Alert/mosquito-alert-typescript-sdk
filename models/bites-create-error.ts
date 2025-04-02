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
import type { BitesCreateCountsChestErrorComponent } from './bites-create-counts-chest-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCountsChestErrorComponentCode } from './bites-create-counts-chest-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCountsHeadErrorComponent } from './bites-create-counts-head-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCountsLeftArmErrorComponent } from './bites-create-counts-left-arm-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCountsLeftLegErrorComponent } from './bites-create-counts-left-leg-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCountsNonFieldErrorsErrorComponent } from './bites-create-counts-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCountsRightArmErrorComponent } from './bites-create-counts-right-arm-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCountsRightLegErrorComponent } from './bites-create-counts-right-leg-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCountsRightLegErrorComponentAttr } from './bites-create-counts-right-leg-error-component-attr';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateCreatedAtErrorComponent } from './bites-create-created-at-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateEventEnvironmentErrorComponent } from './bites-create-event-environment-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateEventMomentErrorComponent } from './bites-create-event-moment-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateLocationNonFieldErrorsErrorComponent } from './bites-create-location-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateLocationPointErrorComponent } from './bites-create-location-point-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateLocationSourceErrorComponent } from './bites-create-location-source-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateNonFieldErrorsErrorComponent } from './bites-create-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateNoteErrorComponent } from './bites-create-note-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateSentAtErrorComponent } from './bites-create-sent-at-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateTagsErrorComponent } from './bites-create-tags-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { BitesCreateTagsINDEXErrorComponent } from './bites-create-tags-indexerror-component';

/**
 * @type BitesCreateError
 * @export
 */
export type BitesCreateError = { attr: 'counts.chest' } & BitesCreateCountsChestErrorComponent | { attr: 'counts.head' } & BitesCreateCountsHeadErrorComponent | { attr: 'counts.left_arm' } & BitesCreateCountsLeftArmErrorComponent | { attr: 'counts.left_leg' } & BitesCreateCountsLeftLegErrorComponent | { attr: 'counts.non_field_errors' } & BitesCreateCountsNonFieldErrorsErrorComponent | { attr: 'counts.right_arm' } & BitesCreateCountsRightArmErrorComponent | { attr: 'counts.right_leg' } & BitesCreateCountsRightLegErrorComponent | { attr: 'created_at' } & BitesCreateCreatedAtErrorComponent | { attr: 'event_environment' } & BitesCreateEventEnvironmentErrorComponent | { attr: 'event_moment' } & BitesCreateEventMomentErrorComponent | { attr: 'location.non_field_errors' } & BitesCreateLocationNonFieldErrorsErrorComponent | { attr: 'location.point' } & BitesCreateLocationPointErrorComponent | { attr: 'location.source' } & BitesCreateLocationSourceErrorComponent | { attr: 'non_field_errors' } & BitesCreateNonFieldErrorsErrorComponent | { attr: 'note' } & BitesCreateNoteErrorComponent | { attr: 'sent_at' } & BitesCreateSentAtErrorComponent | { attr: 'tags' } & BitesCreateTagsErrorComponent | { attr: 'tags.INDEX' } & BitesCreateTagsINDEXErrorComponent;


