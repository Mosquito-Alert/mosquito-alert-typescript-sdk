# CreateUserMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**sender_user** | [**SimpleUser**](SimpleUser.md) |  | [readonly] [default to undefined]
**content** | [**MessageContent**](MessageContent.md) | The content of the message | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { CreateUserMessage } from 'mosquito-alert';

const instance: CreateUserMessage = {
    id,
    sender_user,
    content,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
