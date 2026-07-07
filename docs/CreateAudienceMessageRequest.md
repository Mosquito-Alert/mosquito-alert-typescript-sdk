# CreateAudienceMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**CreateAudienceMessageContentRequest**](CreateAudienceMessageContentRequest.md) | The content of the message for the audience | [default to undefined]
**target** | [**CreateAudienceMessageRequestTarget**](CreateAudienceMessageRequestTarget.md) |  | [default to undefined]
**audience** | [**AudienceFilterRequest**](AudienceFilterRequest.md) | The audience filter for the message | [default to undefined]

## Example

```typescript
import { CreateAudienceMessageRequest } from 'mosquito-alert';

const instance: CreateAudienceMessageRequest = {
    content,
    target,
    audience,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
