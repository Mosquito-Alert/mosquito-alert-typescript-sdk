# AnnotationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_photo_uuid** | **string** |  | [optional] [default to undefined]
**classification** | [**AnnotationClassificationRequest**](AnnotationClassificationRequest.md) |  | [default to undefined]
**characteristics** | [**AnnotationCharacteristicsRequest**](AnnotationCharacteristicsRequest.md) |  | [optional] [default to undefined]
**feedback** | [**AnnotationFeedbackRequest**](AnnotationFeedbackRequest.md) |  | [optional] [default to undefined]
**is_flagged** | **boolean** |  | [optional] [default to false]
**is_decisive** | **boolean** |  | [optional] [default to false]
**observation_flags** | [**ObservationFlagsRequest**](ObservationFlagsRequest.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AnnotationRequest } from 'mosquito-alert';

const instance: AnnotationRequest = {
    best_photo_uuid,
    classification,
    characteristics,
    feedback,
    is_flagged,
    is_decisive,
    observation_flags,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
