# MessagesApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create**](#create) | **POST** /messages/ | |
|[**list**](#list) | **GET** /messages/ | |
|[**listMineSent**](#listminesent) | **GET** /me/messages/sent/ | |
|[**recipientsList**](#recipientslist) | **GET** /messages/{id}/recipients/ | |
|[**recipientsStatsRetrieve**](#recipientsstatsretrieve) | **GET** /messages/{id}/recipients/stats/ | |
|[**retrieve**](#retrieve) | **GET** /messages/{id}/ | |
|[**targetingRetrieve**](#targetingretrieve) | **GET** /messages/{id}/targeting/ | |

# **create**
> Message create()


### Example

```typescript
import {
    MessagesApi,
    Configuration,
    MetaCreateMessageRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let metaCreateMessageRequest: MetaCreateMessageRequest; // (optional)

const { status, data } = await apiInstance.create(
    metaCreateMessageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metaCreateMessageRequest** | **MetaCreateMessageRequest**|  | |


### Return type

**Message**

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

# **list**
> PaginatedMessageListList list()

Get all messages sent by the current user. The content of the message is truncated to 100 words and the body is returned as plain text, without images or HTML tags. To retrieve the full content of a message, use the GET /messages/{id}/ endpoint.

### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let orderBy: Array<MessagesListMineSentOrderByParameter>; //Ordering   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let recipientUuids: Array<string>; //UUID randomly generated on phone to identify each unique user. Must be exactly 36 characters (32 hex digits plus 4 hyphens). (optional) (default to undefined)
let target: MessagesListMineSentTargetParameter; //Filter messages by target audience. Use \'users\' to filter messages sent to specific users, and \'audience\' to filter messages sent to a broader audience.   (optional) (default to undefined)

const { status, data } = await apiInstance.list(
    orderBy,
    page,
    pageSize,
    recipientUuids,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | **Array&lt;MessagesListMineSentOrderByParameter&gt;** | Ordering   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **recipientUuids** | **Array&lt;string&gt;** | UUID randomly generated on phone to identify each unique user. Must be exactly 36 characters (32 hex digits plus 4 hyphens). | (optional) defaults to undefined|
| **target** | **MessagesListMineSentTargetParameter** | Filter messages by target audience. Use \&#39;users\&#39; to filter messages sent to specific users, and \&#39;audience\&#39; to filter messages sent to a broader audience.   | (optional) defaults to undefined|


### Return type

**PaginatedMessageListList**

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

# **listMineSent**
> PaginatedMessageListList listMineSent()

Get current user\'s sent messages

### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let orderBy: Array<MessagesListMineSentOrderByParameter>; //Ordering   (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let recipientUuids: Array<string>; //UUID randomly generated on phone to identify each unique user. Must be exactly 36 characters (32 hex digits plus 4 hyphens). (optional) (default to undefined)
let target: MessagesListMineSentTargetParameter; //Filter messages by target audience. Use \'users\' to filter messages sent to specific users, and \'audience\' to filter messages sent to a broader audience.   (optional) (default to undefined)

const { status, data } = await apiInstance.listMineSent(
    orderBy,
    page,
    pageSize,
    recipientUuids,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | **Array&lt;MessagesListMineSentOrderByParameter&gt;** | Ordering   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **recipientUuids** | **Array&lt;string&gt;** | UUID randomly generated on phone to identify each unique user. Must be exactly 36 characters (32 hex digits plus 4 hyphens). | (optional) defaults to undefined|
| **target** | **MessagesListMineSentTargetParameter** | Filter messages by target audience. Use \&#39;users\&#39; to filter messages sent to specific users, and \&#39;audience\&#39; to filter messages sent to a broader audience.   | (optional) defaults to undefined|


### Return type

**PaginatedMessageListList**

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

# **recipientsList**
> PaginatedMessageRecipientList recipientsList()


### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let id: number; //A unique integer value identifying this notification. (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.recipientsList(
    id,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this notification. | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**PaginatedMessageRecipientList**

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

# **recipientsStatsRetrieve**
> MessageRecipientStats recipientsStatsRetrieve()


### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let id: number; //A unique integer value identifying this notification. (default to undefined)

const { status, data } = await apiInstance.recipientsStatsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this notification. | defaults to undefined|


### Return type

**MessageRecipientStats**

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
> Message retrieve()


### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let id: number; //A unique integer value identifying this notification. (default to undefined)

const { status, data } = await apiInstance.retrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this notification. | defaults to undefined|


### Return type

**Message**

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

# **targetingRetrieve**
> MessageTargeting targetingRetrieve()


### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let id: number; //A unique integer value identifying this notification. (default to undefined)

const { status, data } = await apiInstance.targetingRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this notification. | defaults to undefined|


### Return type

**MessageTargeting**

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

