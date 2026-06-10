# WorkspaceMembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**SimpleUser**](SimpleUser.md) |  | [readonly] [default to undefined]
**role** | [**WorkspaceMembershipRole**](WorkspaceMembershipRole.md) |  | [optional] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { WorkspaceMembership } from 'mosquito-alert';

const instance: WorkspaceMembership = {
    user,
    role,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
