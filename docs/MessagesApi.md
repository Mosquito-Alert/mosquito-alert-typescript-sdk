# MessagesApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create**](#create) | **POST** /messages/ | |
|[**list**](#list) | **GET** /messages/ | |
|[**listMineSent**](#listminesent) | **GET** /me/messages/sent/ | |
|[**recipientsList**](#recipientslist) | **GET** /messages/{id}/recipients/ | |
|[**retrieve**](#retrieve) | **GET** /messages/{id}/ | |
|[**topicsList**](#topicslist) | **GET** /messages/topics/ | |
|[**topicsRetrieve**](#topicsretrieve) | **GET** /messages/topics/{code}/ | |
|[**topicsSend**](#topicssend) | **POST** /messages/topics/{code}/send/ | |

# **create**
> CreateUserMessage create(createUserMessageRequest)


### Example

```typescript
import {
    MessagesApi,
    Configuration,
    CreateUserMessageRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let createUserMessageRequest: CreateUserMessageRequest; //

const { status, data } = await apiInstance.create(
    createUserMessageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserMessageRequest** | **CreateUserMessageRequest**|  | |


### Return type

**CreateUserMessage**

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
> PaginatedMessageList list()


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

const { status, data } = await apiInstance.list(
    orderBy,
    page,
    pageSize,
    recipientUuids
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | **Array&lt;MessagesListMineSentOrderByParameter&gt;** | Ordering   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **recipientUuids** | **Array&lt;string&gt;** | UUID randomly generated on phone to identify each unique user. Must be exactly 36 characters (32 hex digits plus 4 hyphens). | (optional) defaults to undefined|


### Return type

**PaginatedMessageList**

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
> PaginatedMessageList listMineSent()

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

const { status, data } = await apiInstance.listMineSent(
    orderBy,
    page,
    pageSize,
    recipientUuids
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | **Array&lt;MessagesListMineSentOrderByParameter&gt;** | Ordering   | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **recipientUuids** | **Array&lt;string&gt;** | UUID randomly generated on phone to identify each unique user. Must be exactly 36 characters (32 hex digits plus 4 hyphens). | (optional) defaults to undefined|


### Return type

**PaginatedMessageList**

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
> Array<MessageRecipient> recipientsList()


### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let id: number; //A unique integer value identifying this notification. (default to undefined)

const { status, data } = await apiInstance.recipientsList(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this notification. | defaults to undefined|


### Return type

**Array<MessageRecipient>**

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

# **topicsList**
> PaginatedMessageTopicList topicsList()


### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.topicsList(
    page,
    pageSize,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|


### Return type

**PaginatedMessageTopicList**

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

# **topicsRetrieve**
> MessageTopic topicsRetrieve()


### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.topicsRetrieve(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


### Return type

**MessageTopic**

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

# **topicsSend**
> CreateTopicMessage topicsSend(createTopicMessageRequest)

Send a message to a specific topic

### Example

```typescript
import {
    MessagesApi,
    Configuration,
    CreateTopicMessageRequest
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let code: string; // (default to undefined)
let createTopicMessageRequest: CreateTopicMessageRequest; //

const { status, data } = await apiInstance.topicsSend(
    code,
    createTopicMessageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTopicMessageRequest** | **CreateTopicMessageRequest**|  | |
| **code** | [**string**] |  | defaults to undefined|


### Return type

**CreateTopicMessage**

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

