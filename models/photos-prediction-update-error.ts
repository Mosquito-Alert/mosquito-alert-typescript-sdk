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
import type { BitesCreateLocationSourceErrorComponentCode } from './bites-create-location-source-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { IdentificationtasksPredictionsCreateClassifierVersionErrorComponentAttr } from './identificationtasks-predictions-create-classifier-version-error-component-attr';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateBboxNonFieldErrorsErrorComponent } from './photos-prediction-update-bbox-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateBboxXMaxErrorComponent } from './photos-prediction-update-bbox-xmax-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateBboxXMinErrorComponent } from './photos-prediction-update-bbox-xmin-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateBboxYMaxErrorComponent } from './photos-prediction-update-bbox-ymax-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateBboxYMinErrorComponent } from './photos-prediction-update-bbox-ymin-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateClassifierVersionErrorComponent } from './photos-prediction-update-classifier-version-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateInsectConfidenceErrorComponent } from './photos-prediction-update-insect-confidence-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateIsDecisiveErrorComponent } from './photos-prediction-update-is-decisive-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateNonFieldErrorsErrorComponent } from './photos-prediction-update-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdatePredictedClassErrorComponent } from './photos-prediction-update-predicted-class-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresAeAegyptiErrorComponent } from './photos-prediction-update-scores-ae-aegypti-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresAeAlbopictusErrorComponent } from './photos-prediction-update-scores-ae-albopictus-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresAeJaponicusErrorComponent } from './photos-prediction-update-scores-ae-japonicus-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresAeKoreicusErrorComponent } from './photos-prediction-update-scores-ae-koreicus-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresAnophelesErrorComponent } from './photos-prediction-update-scores-anopheles-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresCulexErrorComponent } from './photos-prediction-update-scores-culex-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresCulisetaErrorComponent } from './photos-prediction-update-scores-culiseta-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresNonFieldErrorsErrorComponent } from './photos-prediction-update-scores-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresNotSureErrorComponent } from './photos-prediction-update-scores-not-sure-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateScoresOtherSpeciesErrorComponent } from './photos-prediction-update-scores-other-species-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { PhotosPredictionUpdateThresholdDeviationErrorComponent } from './photos-prediction-update-threshold-deviation-error-component';

/**
 * @type PhotosPredictionUpdateError
 * @export
 */
export type PhotosPredictionUpdateError = { attr: 'bbox.non_field_errors' } & PhotosPredictionUpdateBboxNonFieldErrorsErrorComponent | { attr: 'bbox.x_max' } & PhotosPredictionUpdateBboxXMaxErrorComponent | { attr: 'bbox.x_min' } & PhotosPredictionUpdateBboxXMinErrorComponent | { attr: 'bbox.y_max' } & PhotosPredictionUpdateBboxYMaxErrorComponent | { attr: 'bbox.y_min' } & PhotosPredictionUpdateBboxYMinErrorComponent | { attr: 'classifier_version' } & PhotosPredictionUpdateClassifierVersionErrorComponent | { attr: 'insect_confidence' } & PhotosPredictionUpdateInsectConfidenceErrorComponent | { attr: 'is_decisive' } & PhotosPredictionUpdateIsDecisiveErrorComponent | { attr: 'non_field_errors' } & PhotosPredictionUpdateNonFieldErrorsErrorComponent | { attr: 'predicted_class' } & PhotosPredictionUpdatePredictedClassErrorComponent | { attr: 'scores.ae_aegypti' } & PhotosPredictionUpdateScoresAeAegyptiErrorComponent | { attr: 'scores.ae_albopictus' } & PhotosPredictionUpdateScoresAeAlbopictusErrorComponent | { attr: 'scores.ae_japonicus' } & PhotosPredictionUpdateScoresAeJaponicusErrorComponent | { attr: 'scores.ae_koreicus' } & PhotosPredictionUpdateScoresAeKoreicusErrorComponent | { attr: 'scores.anopheles' } & PhotosPredictionUpdateScoresAnophelesErrorComponent | { attr: 'scores.culex' } & PhotosPredictionUpdateScoresCulexErrorComponent | { attr: 'scores.culiseta' } & PhotosPredictionUpdateScoresCulisetaErrorComponent | { attr: 'scores.non_field_errors' } & PhotosPredictionUpdateScoresNonFieldErrorsErrorComponent | { attr: 'scores.not_sure' } & PhotosPredictionUpdateScoresNotSureErrorComponent | { attr: 'scores.other_species' } & PhotosPredictionUpdateScoresOtherSpeciesErrorComponent | { attr: 'threshold_deviation' } & PhotosPredictionUpdateThresholdDeviationErrorComponent;


