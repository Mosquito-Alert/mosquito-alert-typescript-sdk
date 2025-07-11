# AssignedObservation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [readonly] [default to undefined]
**created_at** | **string** |  | [default to undefined]
**created_at_local** | **string** | The date and time when the record was created, displayed in the local timezone specified for this entry. | [readonly] [default to undefined]
**received_at** | **string** |  | [readonly] [default to undefined]
**location** | [**SimplifiedLocation**](SimplifiedLocation.md) |  | [default to undefined]
**note** | **string** | Note user attached to report. | [optional] [default to undefined]
**photos** | [**Array&lt;SimplePhoto&gt;**](SimplePhoto.md) |  | [default to undefined]
**user** | [**MinimalUser**](MinimalUser.md) |  | [readonly] [default to undefined]

## Example

```typescript
import { AssignedObservation } from 'mosquito-alert';

const instance: AssignedObservation = {
    uuid,
    created_at,
    created_at_local,
    received_at,
    location,
    note,
    photos,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
