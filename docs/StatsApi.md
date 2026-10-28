# StatsApi

All URIs are relative to *https://api.mosquitoalert.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**areasList**](#areaslist) | **GET** /stats/areas/ | |
|[**list**](#list) | **GET** /stats/ | |

# **areasList**
> Array<StatsArea> areasList()

Tree of areas (and their subdivisions) the current user can request statistics for. Each node\'s `key` is the value to send as `?area=`.

### Example

```typescript
import {
    StatsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new StatsApi(configuration);

const { status, data } = await apiInstance.areasList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<StatsArea>**

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

# **list**
> Array<ReportStatsResponse> list()

Aggregated report counts (for displaying data tables or charts, for example). The keys present on each row of `data` depend on `group_by` (always includes `count`, plus `date` if grouped by date, `region_id`/`region_code`/`region_name` if grouped by region, and `type` if grouped by type).

### Example

```typescript
import {
    StatsApi,
    Configuration
} from 'mosquito-alert';

const configuration = new Configuration();
const apiInstance = new StatsApi(configuration);

let area: string; //\"\\<level\\>:\\<id\\>\", e.g. \"country:ES\" or \"nuts2:34\". (optional) (default to undefined)
let cumulative: boolean; //Whether to return cumulative counts over time. It only applies when grouping by date. Defaults to False. (optional) (default to undefined)
let dateFrom: string; // (optional) (default to undefined)
let dateTo: string; // (optional) (default to undefined)
let groupBy: Array<StatsListGroupByParameter>; //Comma-separated subset of: date, type, region. (optional) (default to undefined)
let interval: StatsListIntervalParameter; //The interval at which to aggregate data when grouping by date. Defaults to week. (optional) (default to undefined)
let level: StatsListLevelParameter; //The NUTS level to aggregate by when grouping by region. Defaults to NUTS 2. (optional) (default to undefined)
let type: Array<StatsListTypeParameter>; //Comma-separated subset of: bite, adult, site. (optional) (default to undefined)

const { status, data } = await apiInstance.list(
    area,
    cumulative,
    dateFrom,
    dateTo,
    groupBy,
    interval,
    level,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **area** | [**string**] | \&quot;\\&lt;level\\&gt;:\\&lt;id\\&gt;\&quot;, e.g. \&quot;country:ES\&quot; or \&quot;nuts2:34\&quot;. | (optional) defaults to undefined|
| **cumulative** | [**boolean**] | Whether to return cumulative counts over time. It only applies when grouping by date. Defaults to False. | (optional) defaults to undefined|
| **dateFrom** | [**string**] |  | (optional) defaults to undefined|
| **dateTo** | [**string**] |  | (optional) defaults to undefined|
| **groupBy** | **Array&lt;StatsListGroupByParameter&gt;** | Comma-separated subset of: date, type, region. | (optional) defaults to undefined|
| **interval** | **StatsListIntervalParameter** | The interval at which to aggregate data when grouping by date. Defaults to week. | (optional) defaults to undefined|
| **level** | **StatsListLevelParameter** | The NUTS level to aggregate by when grouping by region. Defaults to NUTS 2. | (optional) defaults to undefined|
| **type** | **Array&lt;StatsListTypeParameter&gt;** | Comma-separated subset of: bite, adult, site. | (optional) defaults to undefined|


### Return type

**Array<ReportStatsResponse>**

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

