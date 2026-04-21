# NotificationsApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listMine**](#listmine) | **GET** /me/notifications/ | |
|[**partialUpdate**](#partialupdate) | **PATCH** /notifications/{id}/ | |
|[**retrieve**](#retrieve) | **GET** /notifications/{id}/ | |
|[**update**](#update) | **PUT** /notifications/{id}/ | |

# **listMine**
> PaginatedNotificationList listMine()

Get Current User\'s Notifications

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let isRead: boolean; // (optional) (default to undefined)
let orderBy: Array<MessagesListMineSentOrderByParameter>; //Ordering   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.listMine(
    isRead,
    orderBy,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isRead** | [**boolean**] |  | (optional) defaults to undefined|
| **orderBy** | **Array&lt;MessagesListMineSentOrderByParameter&gt;** | Ordering   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**PaginatedNotificationList**

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

# **partialUpdate**
> Notification partialUpdate()


### Example

```typescript
import {
    NotificationsApi,
    Configuration,
    PatchedNotificationRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let id: number; // (default to undefined)
let patchedNotificationRequest: PatchedNotificationRequest; // (optional)

const { status, data } = await apiInstance.partialUpdate(
    id,
    patchedNotificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedNotificationRequest** | **PatchedNotificationRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Notification**

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
> Notification retrieve()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.retrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Notification**

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

# **update**
> Notification update(notificationRequest)


### Example

```typescript
import {
    NotificationsApi,
    Configuration,
    NotificationRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let id: number; // (default to undefined)
let notificationRequest: NotificationRequest; //

const { status, data } = await apiInstance.update(
    id,
    notificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationRequest** | **NotificationRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Notification**

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

