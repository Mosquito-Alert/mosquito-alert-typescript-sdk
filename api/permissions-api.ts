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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ErrorResponse401 } from '../models';
// @ts-ignore
import type { ErrorResponse404 } from '../models';
// @ts-ignore
import type { UserPermission } from '../models';
/**
 * PermissionsApi - axios parameter creator
 * @export
 */
export const PermissionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get Current User\'s Permissions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMine: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/me/permissions/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication cookieAuth required

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PermissionsApi - functional programming interface
 * @export
 */
export const PermissionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PermissionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get Current User\'s Permissions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveMine(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPermission>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveMine(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PermissionsApi.retrieveMine']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PermissionsApi - factory interface
 * @export
 */
export const PermissionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PermissionsApiFp(configuration)
    return {
        /**
         * Get Current User\'s Permissions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMine(options?: RawAxiosRequestConfig): AxiosPromise<UserPermission> {
            return localVarFp.retrieveMine(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PermissionsApi - object-oriented interface
 * @export
 * @class PermissionsApi
 * @extends {BaseAPI}
 */
export class PermissionsApi extends BaseAPI {
    /**
     * Get Current User\'s Permissions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public retrieveMine(options?: RawAxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).retrieveMine(options).then((request) => request(this.axios, this.basePath));
    }
}

