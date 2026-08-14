# MessageList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**sender_user** | [**SimpleUser**](SimpleUser.md) |  | [readonly] [default to undefined]
**content** | [**MessageListContent**](MessageListContent.md) |  | [readonly] [default to undefined]
**target** | [**MessageTarget**](MessageTarget.md) |  | [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { MessageList } from 'mosquito-alert';

const instance: MessageList = {
    id,
    sender_user,
    content,
    target,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
