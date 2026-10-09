# ReportStatsMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_by** | [**Array&lt;ReportStatsMetaGroupBy&gt;**](ReportStatsMetaGroupBy.md) |  | [default to undefined]
**interval** | [**ReportStatsMetaInterval**](ReportStatsMetaInterval.md) |  | [optional] [default to undefined]
**cumulative** | **boolean** |  | [optional] [default to undefined]
**level** | [**ReportStatsMetaLevel**](ReportStatsMetaLevel.md) |  | [optional] [default to undefined]
**area** | [**AreaMeta**](AreaMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReportStatsMeta } from 'mosquito-alert';

const instance: ReportStatsMeta = {
    group_by,
    interval,
    cumulative,
    level,
    area,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
