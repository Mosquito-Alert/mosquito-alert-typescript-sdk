# StatsArea


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Value to send as &#x60;?area&#x3D;&#x60;, e.g. \&quot;nuts2:34\&quot;. | [default to undefined]
**level** | [**AreaMetaLevel**](AreaMetaLevel.md) |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**code** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**is_member** | **boolean** | True if the user is a direct member of a workspace anchored on this area. | [default to undefined]
**children** | [**Array&lt;StatsArea&gt;**](StatsArea.md) |  | [readonly] [default to undefined]

## Example

```typescript
import { StatsArea } from 'mosquito-alert';

const instance: StatsArea = {
    key,
    level,
    id,
    code,
    name,
    is_member,
    children,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
