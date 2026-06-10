# WorkspaceCollaborationGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**workspaces** | [**Array&lt;SimpleWorkspace&gt;**](SimpleWorkspace.md) |  | [readonly] [default to undefined]
**reviewers** | [**Array&lt;SimpleUser&gt;**](SimpleUser.md) |  | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**updated_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { WorkspaceCollaborationGroup } from 'mosquito-alert';

const instance: WorkspaceCollaborationGroup = {
    id,
    name,
    workspaces,
    reviewers,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
