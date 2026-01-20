# BoundariesApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTemporal**](#createtemporal) | **POST** /boundaries/ | |

# **createTemporal**
> TemporalBoundary createTemporal(temporalBoundaryRequest)

Create a temporal boundary

### Example

```typescript
import {
    BoundariesApi,
    Configuration,
    TemporalBoundaryRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new BoundariesApi(configuration);

let temporalBoundaryRequest: TemporalBoundaryRequest; //

const { status, data } = await apiInstance.createTemporal(
    temporalBoundaryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **temporalBoundaryRequest** | **TemporalBoundaryRequest**|  | |


### Return type

**TemporalBoundary**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** |  |  -  |
|**401** |  |  -  |
|**404** |  |  -  |
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

