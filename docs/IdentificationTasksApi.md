# IdentificationTasksApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**annotationsCreate**](#annotationscreate) | **POST** /identification-tasks/{observation_uuid}/annotations/ | |
|[**annotationsList**](#annotationslist) | **GET** /identification-tasks/{observation_uuid}/annotations/ | |
|[**annotationsListMine**](#annotationslistmine) | **GET** /me/identification-tasks/annotations/ | |
|[**annotationsRetrieve**](#annotationsretrieve) | **GET** /identification-tasks/{observation_uuid}/annotations/{id}/ | |
|[**assignNext**](#assignnext) | **POST** /identification-tasks/assignments/next/ | |
|[**list**](#list) | **GET** /identification-tasks/ | |
|[**listMine**](#listmine) | **GET** /me/identification-tasks/ | |
|[**predictionsCreate**](#predictionscreate) | **POST** /identification-tasks/{observation_uuid}/predictions/ | |
|[**predictionsDestroy**](#predictionsdestroy) | **DELETE** /identification-tasks/{observation_uuid}/predictions/{photo_uuid}/ | |
|[**predictionsList**](#predictionslist) | **GET** /identification-tasks/{observation_uuid}/predictions/ | |
|[**predictionsPartialUpdate**](#predictionspartialupdate) | **PATCH** /identification-tasks/{observation_uuid}/predictions/{photo_uuid}/ | |
|[**predictionsRetrieve**](#predictionsretrieve) | **GET** /identification-tasks/{observation_uuid}/predictions/{photo_uuid}/ | |
|[**predictionsUpdate**](#predictionsupdate) | **PUT** /identification-tasks/{observation_uuid}/predictions/{photo_uuid}/ | |
|[**retrieve**](#retrieve) | **GET** /identification-tasks/{observation_uuid}/ | |

# **annotationsCreate**
> Annotation annotationsCreate(annotationRequest)


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration,
    AnnotationRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; //UUID of the Observation (default to undefined)
let annotationRequest: AnnotationRequest; //

const { status, data } = await apiInstance.annotationsCreate(
    observationUuid,
    annotationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **annotationRequest** | **AnnotationRequest**|  | |
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|


### Return type

**Annotation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **annotationsList**
> PaginatedAnnotationList annotationsList()


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; //UUID of the Observation (default to undefined)
let classificationConfidenceLabel: IdentificationtasksAnnotationsListClassificationConfidenceLabelParameter; // (optional) (default to undefined)
let classificationConfidenceMax: number; // (optional) (default to undefined)
let classificationConfidenceMin: number; // (optional) (default to undefined)
let classificationTaxonIds: Array<number>; // (optional) (default to undefined)
let createdAtAfter: string; //Created at (optional) (default to undefined)
let createdAtBefore: string; //Created at (optional) (default to undefined)
let isDecisive: boolean; // (optional) (default to undefined)
let isFavourite: boolean; // (optional) (default to undefined)
let isFlagged: boolean; // (optional) (default to undefined)
let orderBy: Array<IdentificationtasksListOrderByParameter>; //Ordenado   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let type: IdentificationtasksAnnotationsListTypeParameter; // (optional) (default to undefined)
let updatedAtAfter: string; //Updated at (optional) (default to undefined)
let updatedAtBefore: string; //Updated at (optional) (default to undefined)
let userIds: Array<number>; // (optional) (default to undefined)

const { status, data } = await apiInstance.annotationsList(
    observationUuid,
    classificationConfidenceLabel,
    classificationConfidenceMax,
    classificationConfidenceMin,
    classificationTaxonIds,
    createdAtAfter,
    createdAtBefore,
    isDecisive,
    isFavourite,
    isFlagged,
    orderBy,
    page,
    pageSize,
    type,
    updatedAtAfter,
    updatedAtBefore,
    userIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|
| **classificationConfidenceLabel** | **IdentificationtasksAnnotationsListClassificationConfidenceLabelParameter** |  | (optional) defaults to undefined|
| **classificationConfidenceMax** | [**number**] |  | (optional) defaults to undefined|
| **classificationConfidenceMin** | [**number**] |  | (optional) defaults to undefined|
| **classificationTaxonIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **createdAtAfter** | [**string**] | Created at | (optional) defaults to undefined|
| **createdAtBefore** | [**string**] | Created at | (optional) defaults to undefined|
| **isDecisive** | [**boolean**] |  | (optional) defaults to undefined|
| **isFavourite** | [**boolean**] |  | (optional) defaults to undefined|
| **isFlagged** | [**boolean**] |  | (optional) defaults to undefined|
| **orderBy** | **Array&lt;IdentificationtasksListOrderByParameter&gt;** | Ordenado   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **type** | **IdentificationtasksAnnotationsListTypeParameter** |  | (optional) defaults to undefined|
| **updatedAtAfter** | [**string**] | Updated at | (optional) defaults to undefined|
| **updatedAtBefore** | [**string**] | Updated at | (optional) defaults to undefined|
| **userIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|


### Return type

**PaginatedAnnotationList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **annotationsListMine**
> PaginatedAnnotationList annotationsListMine()

Get my annotations

### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let classificationConfidenceLabel: IdentificationtasksAnnotationsListClassificationConfidenceLabelParameter; // (optional) (default to undefined)
let classificationConfidenceMax: number; // (optional) (default to undefined)
let classificationConfidenceMin: number; // (optional) (default to undefined)
let classificationTaxonIds: Array<number>; // (optional) (default to undefined)
let createdAtAfter: string; //Created at (optional) (default to undefined)
let createdAtBefore: string; //Created at (optional) (default to undefined)
let isDecisive: boolean; // (optional) (default to undefined)
let isFavourite: boolean; // (optional) (default to undefined)
let isFlagged: boolean; // (optional) (default to undefined)
let orderBy: Array<IdentificationtasksListOrderByParameter>; //Ordenado   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let type: IdentificationtasksAnnotationsListTypeParameter; // (optional) (default to undefined)
let updatedAtAfter: string; //Updated at (optional) (default to undefined)
let updatedAtBefore: string; //Updated at (optional) (default to undefined)
let userIds: Array<number>; // (optional) (default to undefined)

const { status, data } = await apiInstance.annotationsListMine(
    classificationConfidenceLabel,
    classificationConfidenceMax,
    classificationConfidenceMin,
    classificationTaxonIds,
    createdAtAfter,
    createdAtBefore,
    isDecisive,
    isFavourite,
    isFlagged,
    orderBy,
    page,
    pageSize,
    type,
    updatedAtAfter,
    updatedAtBefore,
    userIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classificationConfidenceLabel** | **IdentificationtasksAnnotationsListClassificationConfidenceLabelParameter** |  | (optional) defaults to undefined|
| **classificationConfidenceMax** | [**number**] |  | (optional) defaults to undefined|
| **classificationConfidenceMin** | [**number**] |  | (optional) defaults to undefined|
| **classificationTaxonIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **createdAtAfter** | [**string**] | Created at | (optional) defaults to undefined|
| **createdAtBefore** | [**string**] | Created at | (optional) defaults to undefined|
| **isDecisive** | [**boolean**] |  | (optional) defaults to undefined|
| **isFavourite** | [**boolean**] |  | (optional) defaults to undefined|
| **isFlagged** | [**boolean**] |  | (optional) defaults to undefined|
| **orderBy** | **Array&lt;IdentificationtasksListOrderByParameter&gt;** | Ordenado   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **type** | **IdentificationtasksAnnotationsListTypeParameter** |  | (optional) defaults to undefined|
| **updatedAtAfter** | [**string**] | Updated at | (optional) defaults to undefined|
| **updatedAtBefore** | [**string**] | Updated at | (optional) defaults to undefined|
| **userIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|


### Return type

**PaginatedAnnotationList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **annotationsRetrieve**
> Annotation annotationsRetrieve()


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let id: number; //A unique integer value identifying this expert report annotation. (default to undefined)
let observationUuid: string; //UUID of the Observation (default to undefined)

const { status, data } = await apiInstance.annotationsRetrieve(
    id,
    observationUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this expert report annotation. | defaults to undefined|
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|


### Return type

**Annotation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignNext**
> Assignment assignNext()

Assign the next available identification task.

### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

const { status, data } = await apiInstance.assignNext();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Assignment**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**201** |  |  -  |
|**204** | No available tasks pending to assign |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> PaginatedIdentificationTaskList list()


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let annotatorIds: Array<number>; // (optional) (default to undefined)
let assigneeIds: Array<number>; // (optional) (default to undefined)
let createdAtAfter: string; //Created at (optional) (default to undefined)
let createdAtBefore: string; //Created at (optional) (default to undefined)
let fullyPredicted: boolean; //Filters identification task based on whether all associated photos have predictions. Set to True to include identification tasks where every photo has a prediction; set to False to include identification tasks where at least one photo is missing a prediction. (optional) (default to undefined)
let isFlagged: boolean; // (optional) (default to undefined)
let isSafe: boolean; // (optional) (default to undefined)
let numAnnotationsMax: number; // (optional) (default to undefined)
let numAnnotationsMin: number; // (optional) (default to undefined)
let observationCountryIds: Array<number>; // (optional) (default to undefined)
let orderBy: Array<IdentificationtasksListOrderByParameter>; //Ordenado   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let resultAgreementMax: number; // (optional) (default to undefined)
let resultAgreementMin: number; // (optional) (default to undefined)
let resultConfidenceMax: string; // (optional) (default to undefined)
let resultConfidenceMin: string; // (optional) (default to undefined)
let resultSource: IdentificationtasksListResultSourceParameter; // (optional) (default to undefined)
let resultTaxonIds: Array<number>; // (optional) (default to undefined)
let resultUncertaintyMax: number; // (optional) (default to undefined)
let resultUncertaintyMin: number; // (optional) (default to undefined)
let reviewType: IdentificationtasksListReviewTypeParameter; // (optional) (default to undefined)
let status: Array<IdentificationtasksListStatusParameter>; // (optional) (default to undefined)
let updatedAtAfter: string; //Update at (optional) (default to undefined)
let updatedAtBefore: string; //Update at (optional) (default to undefined)

const { status, data } = await apiInstance.list(
    annotatorIds,
    assigneeIds,
    createdAtAfter,
    createdAtBefore,
    fullyPredicted,
    isFlagged,
    isSafe,
    numAnnotationsMax,
    numAnnotationsMin,
    observationCountryIds,
    orderBy,
    page,
    pageSize,
    resultAgreementMax,
    resultAgreementMin,
    resultConfidenceMax,
    resultConfidenceMin,
    resultSource,
    resultTaxonIds,
    resultUncertaintyMax,
    resultUncertaintyMin,
    reviewType,
    status,
    updatedAtAfter,
    updatedAtBefore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **annotatorIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **assigneeIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **createdAtAfter** | [**string**] | Created at | (optional) defaults to undefined|
| **createdAtBefore** | [**string**] | Created at | (optional) defaults to undefined|
| **fullyPredicted** | [**boolean**] | Filters identification task based on whether all associated photos have predictions. Set to True to include identification tasks where every photo has a prediction; set to False to include identification tasks where at least one photo is missing a prediction. | (optional) defaults to undefined|
| **isFlagged** | [**boolean**] |  | (optional) defaults to undefined|
| **isSafe** | [**boolean**] |  | (optional) defaults to undefined|
| **numAnnotationsMax** | [**number**] |  | (optional) defaults to undefined|
| **numAnnotationsMin** | [**number**] |  | (optional) defaults to undefined|
| **observationCountryIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **orderBy** | **Array&lt;IdentificationtasksListOrderByParameter&gt;** | Ordenado   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **resultAgreementMax** | [**number**] |  | (optional) defaults to undefined|
| **resultAgreementMin** | [**number**] |  | (optional) defaults to undefined|
| **resultConfidenceMax** | [**string**] |  | (optional) defaults to undefined|
| **resultConfidenceMin** | [**string**] |  | (optional) defaults to undefined|
| **resultSource** | **IdentificationtasksListResultSourceParameter** |  | (optional) defaults to undefined|
| **resultTaxonIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **resultUncertaintyMax** | [**number**] |  | (optional) defaults to undefined|
| **resultUncertaintyMin** | [**number**] |  | (optional) defaults to undefined|
| **reviewType** | **IdentificationtasksListReviewTypeParameter** |  | (optional) defaults to undefined|
| **status** | **Array&lt;IdentificationtasksListStatusParameter&gt;** |  | (optional) defaults to undefined|
| **updatedAtAfter** | [**string**] | Update at | (optional) defaults to undefined|
| **updatedAtBefore** | [**string**] | Update at | (optional) defaults to undefined|


### Return type

**PaginatedIdentificationTaskList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMine**
> PaginatedIdentificationTaskList listMine()

Get identification tasks annotated by me

### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let annotatorIds: Array<number>; // (optional) (default to undefined)
let assigneeIds: Array<number>; // (optional) (default to undefined)
let createdAtAfter: string; //Created at (optional) (default to undefined)
let createdAtBefore: string; //Created at (optional) (default to undefined)
let fullyPredicted: boolean; //Filters identification task based on whether all associated photos have predictions. Set to True to include identification tasks where every photo has a prediction; set to False to include identification tasks where at least one photo is missing a prediction. (optional) (default to undefined)
let isFlagged: boolean; // (optional) (default to undefined)
let isSafe: boolean; // (optional) (default to undefined)
let numAnnotationsMax: number; // (optional) (default to undefined)
let numAnnotationsMin: number; // (optional) (default to undefined)
let observationCountryIds: Array<number>; // (optional) (default to undefined)
let orderBy: Array<IdentificationtasksListOrderByParameter>; //Ordenado   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let resultAgreementMax: number; // (optional) (default to undefined)
let resultAgreementMin: number; // (optional) (default to undefined)
let resultConfidenceMax: string; // (optional) (default to undefined)
let resultConfidenceMin: string; // (optional) (default to undefined)
let resultSource: IdentificationtasksListResultSourceParameter; // (optional) (default to undefined)
let resultTaxonIds: Array<number>; // (optional) (default to undefined)
let resultUncertaintyMax: number; // (optional) (default to undefined)
let resultUncertaintyMin: number; // (optional) (default to undefined)
let reviewType: IdentificationtasksListReviewTypeParameter; // (optional) (default to undefined)
let status: Array<IdentificationtasksListStatusParameter>; // (optional) (default to undefined)
let updatedAtAfter: string; //Update at (optional) (default to undefined)
let updatedAtBefore: string; //Update at (optional) (default to undefined)

const { status, data } = await apiInstance.listMine(
    annotatorIds,
    assigneeIds,
    createdAtAfter,
    createdAtBefore,
    fullyPredicted,
    isFlagged,
    isSafe,
    numAnnotationsMax,
    numAnnotationsMin,
    observationCountryIds,
    orderBy,
    page,
    pageSize,
    resultAgreementMax,
    resultAgreementMin,
    resultConfidenceMax,
    resultConfidenceMin,
    resultSource,
    resultTaxonIds,
    resultUncertaintyMax,
    resultUncertaintyMin,
    reviewType,
    status,
    updatedAtAfter,
    updatedAtBefore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **annotatorIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **assigneeIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **createdAtAfter** | [**string**] | Created at | (optional) defaults to undefined|
| **createdAtBefore** | [**string**] | Created at | (optional) defaults to undefined|
| **fullyPredicted** | [**boolean**] | Filters identification task based on whether all associated photos have predictions. Set to True to include identification tasks where every photo has a prediction; set to False to include identification tasks where at least one photo is missing a prediction. | (optional) defaults to undefined|
| **isFlagged** | [**boolean**] |  | (optional) defaults to undefined|
| **isSafe** | [**boolean**] |  | (optional) defaults to undefined|
| **numAnnotationsMax** | [**number**] |  | (optional) defaults to undefined|
| **numAnnotationsMin** | [**number**] |  | (optional) defaults to undefined|
| **observationCountryIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **orderBy** | **Array&lt;IdentificationtasksListOrderByParameter&gt;** | Ordenado   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **resultAgreementMax** | [**number**] |  | (optional) defaults to undefined|
| **resultAgreementMin** | [**number**] |  | (optional) defaults to undefined|
| **resultConfidenceMax** | [**string**] |  | (optional) defaults to undefined|
| **resultConfidenceMin** | [**string**] |  | (optional) defaults to undefined|
| **resultSource** | **IdentificationtasksListResultSourceParameter** |  | (optional) defaults to undefined|
| **resultTaxonIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **resultUncertaintyMax** | [**number**] |  | (optional) defaults to undefined|
| **resultUncertaintyMin** | [**number**] |  | (optional) defaults to undefined|
| **reviewType** | **IdentificationtasksListReviewTypeParameter** |  | (optional) defaults to undefined|
| **status** | **Array&lt;IdentificationtasksListStatusParameter&gt;** |  | (optional) defaults to undefined|
| **updatedAtAfter** | [**string**] | Update at | (optional) defaults to undefined|
| **updatedAtBefore** | [**string**] | Update at | (optional) defaults to undefined|


### Return type

**PaginatedIdentificationTaskList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictionsCreate**
> CreatePhotoPrediction predictionsCreate(createPhotoPredictionRequest)


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration,
    CreatePhotoPredictionRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; //UUID of the Observation (default to undefined)
let createPhotoPredictionRequest: CreatePhotoPredictionRequest; //

const { status, data } = await apiInstance.predictionsCreate(
    observationUuid,
    createPhotoPredictionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPhotoPredictionRequest** | **CreatePhotoPredictionRequest**|  | |
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|


### Return type

**CreatePhotoPrediction**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictionsDestroy**
> predictionsDestroy()


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; //UUID of the Observation (default to undefined)
let photoUuid: string; // (default to undefined)

const { status, data } = await apiInstance.predictionsDestroy(
    observationUuid,
    photoUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|
| **photoUuid** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictionsList**
> PaginatedPhotoPredictionList predictionsList()


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; //UUID of the Observation (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.predictionsList(
    observationUuid,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**PaginatedPhotoPredictionList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictionsPartialUpdate**
> PhotoPrediction predictionsPartialUpdate()


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration,
    PatchedPhotoPredictionRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; //UUID of the Observation (default to undefined)
let photoUuid: string; // (default to undefined)
let patchedPhotoPredictionRequest: PatchedPhotoPredictionRequest; // (optional)

const { status, data } = await apiInstance.predictionsPartialUpdate(
    observationUuid,
    photoUuid,
    patchedPhotoPredictionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPhotoPredictionRequest** | **PatchedPhotoPredictionRequest**|  | |
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|
| **photoUuid** | [**string**] |  | defaults to undefined|


### Return type

**PhotoPrediction**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictionsRetrieve**
> PhotoPrediction predictionsRetrieve()


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; //UUID of the Observation (default to undefined)
let photoUuid: string; // (default to undefined)

const { status, data } = await apiInstance.predictionsRetrieve(
    observationUuid,
    photoUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|
| **photoUuid** | [**string**] |  | defaults to undefined|


### Return type

**PhotoPrediction**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictionsUpdate**
> PhotoPrediction predictionsUpdate(photoPredictionRequest)


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration,
    PhotoPredictionRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; //UUID of the Observation (default to undefined)
let photoUuid: string; // (default to undefined)
let photoPredictionRequest: PhotoPredictionRequest; //

const { status, data } = await apiInstance.predictionsUpdate(
    observationUuid,
    photoUuid,
    photoPredictionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoPredictionRequest** | **PhotoPredictionRequest**|  | |
| **observationUuid** | [**string**] | UUID of the Observation | defaults to undefined|
| **photoUuid** | [**string**] |  | defaults to undefined|


### Return type

**PhotoPrediction**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve**
> IdentificationTask retrieve()


### Example

```typescript
import {
    IdentificationTasksApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new IdentificationTasksApi(configuration);

let observationUuid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieve(
    observationUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **observationUuid** | [**string**] |  | defaults to undefined|


### Return type

**IdentificationTask**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

