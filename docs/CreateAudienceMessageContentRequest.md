# CreateAudienceMessageContentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | [**LocalizedAudienceMessageTitleRequest**](LocalizedAudienceMessageTitleRequest.md) | Provide the message\&#39;s title in all supported languages for this audience | [default to undefined]
**body** | [**LocalizedAudienceMessageBodyRequest**](LocalizedAudienceMessageBodyRequest.md) | Provide the message\&#39;s body in all supported languages for this audience | [default to undefined]

## Example

```typescript
import { CreateAudienceMessageContentRequest } from 'mosquito-alert';

const instance: CreateAudienceMessageContentRequest = {
    title,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
