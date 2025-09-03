# CreateOverwriteReviewRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**CreateOverwriteReviewRequestAction**](CreateOverwriteReviewRequestAction.md) |  | [optional] [default to undefined]
**public_photo_uuid** | **string** |  | [default to undefined]
**is_safe** | **boolean** | Indicates if the content is safe for publication. | [default to undefined]
**public_note** | **string** |  | [default to undefined]
**result** | [**AnnotationClassificationRequest**](AnnotationClassificationRequest.md) |  | [default to undefined]

## Example

```typescript
import { CreateOverwriteReviewRequest } from 'mosquito-alert';

const instance: CreateOverwriteReviewRequest = {
    action,
    public_photo_uuid,
    is_safe,
    public_note,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
