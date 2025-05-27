# CampaignsApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**list**](#list) | **GET** /campaigns/ | |
|[**retrieve**](#retrieve) | **GET** /campaigns/{id}/ | |

# **list**
> PaginatedCampaignList list()


### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let countryId: number; //Country in which the campaign is taking place (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let orderBy: Array<CampaignsListOrderByParameter>; //Ordenado   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.list(
    countryId,
    isActive,
    orderBy,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **countryId** | [**number**] | Country in which the campaign is taking place | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
| **orderBy** | **Array&lt;CampaignsListOrderByParameter&gt;** | Ordenado   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**PaginatedCampaignList**

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
> Campaign retrieve()


### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let id: number; //A unique integer value identifying this ow campaigns. (default to undefined)

const { status, data } = await apiInstance.retrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this ow campaigns. | defaults to undefined|


### Return type

**Campaign**

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

