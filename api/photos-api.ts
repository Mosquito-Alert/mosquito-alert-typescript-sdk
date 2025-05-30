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
import type { ErrorResponse403 } from '../models';
// @ts-ignore
import type { ErrorResponse404 } from '../models';
// @ts-ignore
import type { PatchedPhotoPredictionRequest } from '../models';
// @ts-ignore
import type { Photo } from '../models';
// @ts-ignore
import type { PhotoPrediction } from '../models';
// @ts-ignore
import type { PhotoPredictionRequest } from '../models';
// @ts-ignore
import type { PhotosPredictionPartialUpdateValidationError } from '../models';
// @ts-ignore
import type { PhotosPredictionUpdateValidationError } from '../models';
/**
 * PhotosApi - axios parameter creator
 * @export
 */
export const PhotosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictionDestroy: async (uuid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('predictionDestroy', 'uuid', uuid)
            const localVarPath = `/photos/{uuid}/prediction/`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * 
         * @param {string} uuid 
         * @param {PatchedPhotoPredictionRequest} [patchedPhotoPredictionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictionPartialUpdate: async (uuid: string, patchedPhotoPredictionRequest?: PatchedPhotoPredictionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('predictionPartialUpdate', 'uuid', uuid)
            const localVarPath = `/photos/{uuid}/prediction/`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication cookieAuth required

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchedPhotoPredictionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictionRetrieve: async (uuid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('predictionRetrieve', 'uuid', uuid)
            const localVarPath = `/photos/{uuid}/prediction/`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
        /**
         * 
         * @param {string} uuid 
         * @param {PhotoPredictionRequest} photoPredictionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictionUpdate: async (uuid: string, photoPredictionRequest: PhotoPredictionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('predictionUpdate', 'uuid', uuid)
            // verify required parameter 'photoPredictionRequest' is not null or undefined
            assertParamExists('predictionUpdate', 'photoPredictionRequest', photoPredictionRequest)
            const localVarPath = `/photos/{uuid}/prediction/`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication cookieAuth required

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(photoPredictionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve: async (uuid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('retrieve', 'uuid', uuid)
            const localVarPath = `/photos/{uuid}/`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
 * PhotosApi - functional programming interface
 * @export
 */
export const PhotosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PhotosApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async predictionDestroy(uuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.predictionDestroy(uuid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.predictionDestroy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} uuid 
         * @param {PatchedPhotoPredictionRequest} [patchedPhotoPredictionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async predictionPartialUpdate(uuid: string, patchedPhotoPredictionRequest?: PatchedPhotoPredictionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PhotoPrediction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.predictionPartialUpdate(uuid, patchedPhotoPredictionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.predictionPartialUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async predictionRetrieve(uuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PhotoPrediction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.predictionRetrieve(uuid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.predictionRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} uuid 
         * @param {PhotoPredictionRequest} photoPredictionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async predictionUpdate(uuid: string, photoPredictionRequest: PhotoPredictionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PhotoPrediction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.predictionUpdate(uuid, photoPredictionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.predictionUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieve(uuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Photo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieve(uuid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.retrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PhotosApi - factory interface
 * @export
 */
export const PhotosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PhotosApiFp(configuration)
    return {
        /**
         * 
         * @param {PhotosApiPredictionDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictionDestroy(requestParameters: PhotosApiPredictionDestroyRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.predictionDestroy(requestParameters.uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PhotosApiPredictionPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictionPartialUpdate(requestParameters: PhotosApiPredictionPartialUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<PhotoPrediction> {
            return localVarFp.predictionPartialUpdate(requestParameters.uuid, requestParameters.patchedPhotoPredictionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PhotosApiPredictionRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictionRetrieve(requestParameters: PhotosApiPredictionRetrieveRequest, options?: RawAxiosRequestConfig): AxiosPromise<PhotoPrediction> {
            return localVarFp.predictionRetrieve(requestParameters.uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PhotosApiPredictionUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictionUpdate(requestParameters: PhotosApiPredictionUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<PhotoPrediction> {
            return localVarFp.predictionUpdate(requestParameters.uuid, requestParameters.photoPredictionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PhotosApiRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve(requestParameters: PhotosApiRetrieveRequest, options?: RawAxiosRequestConfig): AxiosPromise<Photo> {
            return localVarFp.retrieve(requestParameters.uuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for predictionDestroy operation in PhotosApi.
 * @export
 * @interface PhotosApiPredictionDestroyRequest
 */
export interface PhotosApiPredictionDestroyRequest {
    /**
     * 
     * @type {string}
     * @memberof PhotosApiPredictionDestroy
     */
    readonly uuid: string
}

/**
 * Request parameters for predictionPartialUpdate operation in PhotosApi.
 * @export
 * @interface PhotosApiPredictionPartialUpdateRequest
 */
export interface PhotosApiPredictionPartialUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof PhotosApiPredictionPartialUpdate
     */
    readonly uuid: string

    /**
     * 
     * @type {PatchedPhotoPredictionRequest}
     * @memberof PhotosApiPredictionPartialUpdate
     */
    readonly patchedPhotoPredictionRequest?: PatchedPhotoPredictionRequest
}

/**
 * Request parameters for predictionRetrieve operation in PhotosApi.
 * @export
 * @interface PhotosApiPredictionRetrieveRequest
 */
export interface PhotosApiPredictionRetrieveRequest {
    /**
     * 
     * @type {string}
     * @memberof PhotosApiPredictionRetrieve
     */
    readonly uuid: string
}

/**
 * Request parameters for predictionUpdate operation in PhotosApi.
 * @export
 * @interface PhotosApiPredictionUpdateRequest
 */
export interface PhotosApiPredictionUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof PhotosApiPredictionUpdate
     */
    readonly uuid: string

    /**
     * 
     * @type {PhotoPredictionRequest}
     * @memberof PhotosApiPredictionUpdate
     */
    readonly photoPredictionRequest: PhotoPredictionRequest
}

/**
 * Request parameters for retrieve operation in PhotosApi.
 * @export
 * @interface PhotosApiRetrieveRequest
 */
export interface PhotosApiRetrieveRequest {
    /**
     * 
     * @type {string}
     * @memberof PhotosApiRetrieve
     */
    readonly uuid: string
}

/**
 * PhotosApi - object-oriented interface
 * @export
 * @class PhotosApi
 * @extends {BaseAPI}
 */
export class PhotosApi extends BaseAPI {
    /**
     * 
     * @param {PhotosApiPredictionDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public predictionDestroy(requestParameters: PhotosApiPredictionDestroyRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).predictionDestroy(requestParameters.uuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PhotosApiPredictionPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public predictionPartialUpdate(requestParameters: PhotosApiPredictionPartialUpdateRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).predictionPartialUpdate(requestParameters.uuid, requestParameters.patchedPhotoPredictionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PhotosApiPredictionRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public predictionRetrieve(requestParameters: PhotosApiPredictionRetrieveRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).predictionRetrieve(requestParameters.uuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PhotosApiPredictionUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public predictionUpdate(requestParameters: PhotosApiPredictionUpdateRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).predictionUpdate(requestParameters.uuid, requestParameters.photoPredictionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PhotosApiRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public retrieve(requestParameters: PhotosApiRetrieveRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).retrieve(requestParameters.uuid, options).then((request) => request(this.axios, this.basePath));
    }
}

