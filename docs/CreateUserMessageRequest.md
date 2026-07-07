# CreateUserMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**MessageContentRequest**](MessageContentRequest.md) | The content of the message | [default to undefined]
**target** | [**CreateUserMessageRequestTarget**](CreateUserMessageRequestTarget.md) |  | [default to undefined]
**user_uuids** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { CreateUserMessageRequest } from 'mosquito-alert';

const instance: CreateUserMessageRequest = {
    content,
    target,
    user_uuids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
