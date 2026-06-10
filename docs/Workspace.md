# Workspace


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**country** | [**Country**](Country.md) |  | [readonly] [default to undefined]
**memberships** | [**Array&lt;WorkspaceMembership&gt;**](WorkspaceMembership.md) |  | [readonly] [default to undefined]
**is_public** | **boolean** | Whether the results of the workspace are visible to the public. | [optional] [default to undefined]
**supervisor_exclusivity_days** | **number** | Number of days that a identification tasks in the queue is exclusively available to the supervisors. | [optional] [default to undefined]
**updated_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Workspace } from 'mosquito-alert';

const instance: Workspace = {
    id,
    name,
    country,
    memberships,
    is_public,
    supervisor_exclusivity_days,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
