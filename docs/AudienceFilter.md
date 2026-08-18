# AudienceFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_login_before** | **string** |  | [optional] [default to undefined]
**last_login_after** | **string** |  | [optional] [default to undefined]
**in_area** | **any** | Filter users whose last known location is within the specified area. The area should be provided as a GeoJSON geometry object. | [optional] [default to undefined]
**locale** | [**AudienceFilterLocale**](AudienceFilterLocale.md) |  | [optional] [default to undefined]
**notification_topics** | **Array&lt;string&gt;** | Filter users subscribed to any of the provided notification topics. | [optional] [default to undefined]

## Example

```typescript
import { AudienceFilter } from 'mosquito-alert';

const instance: AudienceFilter = {
    last_login_before,
    last_login_after,
    in_area,
    locale,
    notification_topics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
