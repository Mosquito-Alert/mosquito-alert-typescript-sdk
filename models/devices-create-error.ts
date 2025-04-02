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
import type { DevicesCreateDeviceIdErrorComponent } from './devices-create-device-id-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateFcmTokenErrorComponent } from './devices-create-fcm-token-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateManufacturerErrorComponent } from './devices-create-manufacturer-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateMobileAppNonFieldErrorsErrorComponent } from './devices-create-mobile-app-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateMobileAppPackageNameErrorComponent } from './devices-create-mobile-app-package-name-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateMobileAppPackageNameErrorComponentCode } from './devices-create-mobile-app-package-name-error-component-code';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateMobileAppPackageVersionErrorComponent } from './devices-create-mobile-app-package-version-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateMobileAppPackageVersionErrorComponentAttr } from './devices-create-mobile-app-package-version-error-component-attr';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateModelErrorComponent } from './devices-create-model-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateNameErrorComponent } from './devices-create-name-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateNonFieldErrorsErrorComponent } from './devices-create-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateOsLocaleErrorComponent } from './devices-create-os-locale-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateOsNameErrorComponent } from './devices-create-os-name-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateOsNonFieldErrorsErrorComponent } from './devices-create-os-non-field-errors-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateOsVersionErrorComponent } from './devices-create-os-version-error-component';
// May contain unused imports in some cases
// @ts-ignore
import type { DevicesCreateTypeErrorComponent } from './devices-create-type-error-component';

/**
 * @type DevicesCreateError
 * @export
 */
export type DevicesCreateError = { attr: 'device_id' } & DevicesCreateDeviceIdErrorComponent | { attr: 'fcm_token' } & DevicesCreateFcmTokenErrorComponent | { attr: 'manufacturer' } & DevicesCreateManufacturerErrorComponent | { attr: 'mobile_app.non_field_errors' } & DevicesCreateMobileAppNonFieldErrorsErrorComponent | { attr: 'mobile_app.package_name' } & DevicesCreateMobileAppPackageNameErrorComponent | { attr: 'mobile_app.package_version' } & DevicesCreateMobileAppPackageVersionErrorComponent | { attr: 'model' } & DevicesCreateModelErrorComponent | { attr: 'name' } & DevicesCreateNameErrorComponent | { attr: 'non_field_errors' } & DevicesCreateNonFieldErrorsErrorComponent | { attr: 'os.locale' } & DevicesCreateOsLocaleErrorComponent | { attr: 'os.name' } & DevicesCreateOsNameErrorComponent | { attr: 'os.non_field_errors' } & DevicesCreateOsNonFieldErrorsErrorComponent | { attr: 'os.version' } & DevicesCreateOsVersionErrorComponent | { attr: 'type' } & DevicesCreateTypeErrorComponent;


