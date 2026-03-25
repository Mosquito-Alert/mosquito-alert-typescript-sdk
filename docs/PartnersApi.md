# PartnersApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**list**](#list) | **GET** /partners/ | |
|[**retrieve**](#retrieve) | **GET** /partners/{id}/ | |

# **list**
> PaginatedPartnerList list()


### Example

```typescript
import {
    PartnersApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new PartnersApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.list(
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**PaginatedPartnerList**

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

# **retrieve**
> Partner retrieve()


### Example

```typescript
import {
    PartnersApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new PartnersApi(configuration);

let id: number; //A unique integer value identifying this organization pin. (default to undefined)

const { status, data } = await apiInstance.retrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this organization pin. | defaults to undefined|


### Return type

**Partner**

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

