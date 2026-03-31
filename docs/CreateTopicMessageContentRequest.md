# CreateTopicMessageContentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | [**LocalizedTopicMessageTitleRequest**](LocalizedTopicMessageTitleRequest.md) | Provide the message\&#39;s title in all supported languages for this topic | [default to undefined]
**body** | [**LocalizedTopicMessageBodyRequest**](LocalizedTopicMessageBodyRequest.md) | Provide the message\&#39;s body in all supported languages for this topic | [default to undefined]

## Example

```typescript
import { CreateTopicMessageContentRequest } from 'mosquito-alert';

const instance: CreateTopicMessageContentRequest = {
    title,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
