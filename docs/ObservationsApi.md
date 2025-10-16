# ObservationsApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create**](#create) | **POST** /observations/ | |
|[**destroy**](#destroy) | **DELETE** /observations/{uuid}/ | |
|[**list**](#list) | **GET** /observations/ | |
|[**listMine**](#listmine) | **GET** /me/observations/ | |
|[**retrieve**](#retrieve) | **GET** /observations/{uuid}/ | |

# **create**
> Observation create()


### Example

```typescript
import {
    ObservationsApi,
    Configuration,
    LocationRequest,
    MosquitoAppearanceRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new ObservationsApi(configuration);

let createdAt: string; // (default to undefined)
let sentAt: string; // (default to undefined)
let location: LocationRequest; // (default to undefined)
let photos: Array<SimplePhotoRequest>; // (default to undefined)
let note: string; //Note user attached to report. (optional) (default to undefined)
let tags: Array<string>; // (optional) (default to undefined)
let eventEnvironment: BiteEventEnvironment; // (optional) (default to undefined)
let eventMoment: BiteEventMoment; // (optional) (default to undefined)
let mosquitoAppearance: MosquitoAppearanceRequest; //User-provided description of the mosquito\\\'s appearance (optional) (default to undefined)

const { status, data } = await apiInstance.create(
    createdAt,
    sentAt,
    location,
    photos,
    note,
    tags,
    eventEnvironment,
    eventMoment,
    mosquitoAppearance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createdAt** | [**string**] |  | defaults to undefined|
| **sentAt** | [**string**] |  | defaults to undefined|
| **location** | **LocationRequest** |  | defaults to undefined|
| **photos** | **Array&lt;SimplePhotoRequest&gt;** |  | defaults to undefined|
| **note** | [**string**] | Note user attached to report. | (optional) defaults to undefined|
| **tags** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **eventEnvironment** | **BiteEventEnvironment** |  | (optional) defaults to undefined|
| **eventMoment** | **BiteEventMoment** |  | (optional) defaults to undefined|
| **mosquitoAppearance** | **MosquitoAppearanceRequest** | User-provided description of the mosquito\\\&#39;s appearance | (optional) defaults to undefined|


### Return type

**Observation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
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

# **destroy**
> destroy()


### Example

```typescript
import {
    ObservationsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new ObservationsApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.destroy(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


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

# **list**
> PaginatedObservationList list()


### Example

```typescript
import {
    ObservationsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new ObservationsApi(configuration);

let countryId: number; // (optional) (default to undefined)
let createdAtAfter: string; //Created at (optional) (default to undefined)
let createdAtBefore: string; //Created at (optional) (default to undefined)
let hasPhotos: boolean; //Has any photo (optional) (default to undefined)
let identificationTaxonIds: Array<number>; // (optional) (default to undefined)
let orderBy: Array<BitesListOrderByParameter>; //Ordenado   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let receivedAtAfter: string; //Received at (optional) (default to undefined)
let receivedAtBefore: string; //Received at (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)
let shortId: string; //Short ID (optional) (default to undefined)
let updatedAtAfter: string; //Update at (optional) (default to undefined)
let updatedAtBefore: string; //Update at (optional) (default to undefined)
let userUuid: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.list(
    countryId,
    createdAtAfter,
    createdAtBefore,
    hasPhotos,
    identificationTaxonIds,
    orderBy,
    page,
    pageSize,
    receivedAtAfter,
    receivedAtBefore,
    search,
    shortId,
    updatedAtAfter,
    updatedAtBefore,
    userUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **countryId** | [**number**] |  | (optional) defaults to undefined|
| **createdAtAfter** | [**string**] | Created at | (optional) defaults to undefined|
| **createdAtBefore** | [**string**] | Created at | (optional) defaults to undefined|
| **hasPhotos** | [**boolean**] | Has any photo | (optional) defaults to undefined|
| **identificationTaxonIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **orderBy** | **Array&lt;BitesListOrderByParameter&gt;** | Ordenado   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **receivedAtAfter** | [**string**] | Received at | (optional) defaults to undefined|
| **receivedAtBefore** | [**string**] | Received at | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|
| **shortId** | [**string**] | Short ID | (optional) defaults to undefined|
| **updatedAtAfter** | [**string**] | Update at | (optional) defaults to undefined|
| **updatedAtBefore** | [**string**] | Update at | (optional) defaults to undefined|
| **userUuid** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaginatedObservationList**

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
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMine**
> PaginatedObservationList listMine()

Get Current User\'s Observations

### Example

```typescript
import {
    ObservationsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new ObservationsApi(configuration);

let countryId: number; // (optional) (default to undefined)
let createdAtAfter: string; //Created at (optional) (default to undefined)
let createdAtBefore: string; //Created at (optional) (default to undefined)
let hasPhotos: boolean; //Has any photo (optional) (default to undefined)
let identificationTaxonIds: Array<number>; // (optional) (default to undefined)
let orderBy: Array<BitesListOrderByParameter>; //Ordenado   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let receivedAtAfter: string; //Received at (optional) (default to undefined)
let receivedAtBefore: string; //Received at (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)
let shortId: string; //Short ID (optional) (default to undefined)
let updatedAtAfter: string; //Update at (optional) (default to undefined)
let updatedAtBefore: string; //Update at (optional) (default to undefined)
let userUuid: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listMine(
    countryId,
    createdAtAfter,
    createdAtBefore,
    hasPhotos,
    identificationTaxonIds,
    orderBy,
    page,
    pageSize,
    receivedAtAfter,
    receivedAtBefore,
    search,
    shortId,
    updatedAtAfter,
    updatedAtBefore,
    userUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **countryId** | [**number**] |  | (optional) defaults to undefined|
| **createdAtAfter** | [**string**] | Created at | (optional) defaults to undefined|
| **createdAtBefore** | [**string**] | Created at | (optional) defaults to undefined|
| **hasPhotos** | [**boolean**] | Has any photo | (optional) defaults to undefined|
| **identificationTaxonIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **orderBy** | **Array&lt;BitesListOrderByParameter&gt;** | Ordenado   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **receivedAtAfter** | [**string**] | Received at | (optional) defaults to undefined|
| **receivedAtBefore** | [**string**] | Received at | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|
| **shortId** | [**string**] | Short ID | (optional) defaults to undefined|
| **updatedAtAfter** | [**string**] | Update at | (optional) defaults to undefined|
| **updatedAtBefore** | [**string**] | Update at | (optional) defaults to undefined|
| **userUuid** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaginatedObservationList**

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

# **retrieve**
> Observation retrieve()


### Example

```typescript
import {
    ObservationsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new ObservationsApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieve(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**Observation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** |  |  -  |
|**404** |  |  -  |
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

