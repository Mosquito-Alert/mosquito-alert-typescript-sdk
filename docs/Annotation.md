# Annotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**observation_uuid** | **string** | UUID randomly generated on phone to identify each unique report version. Must be exactly 36 characters (32 hex digits plus 4 hyphens). | [readonly] [default to undefined]
**user** | [**SimpleAnnotatorUser**](SimpleAnnotatorUser.md) |  | [readonly] [default to undefined]
**best_photo** | [**SimplePhoto**](SimplePhoto.md) |  | [readonly] [default to undefined]
**classification** | [**AnnotationClassification**](AnnotationClassification.md) |  | [default to undefined]
**feedback** | [**AnnotationFeedback**](AnnotationFeedback.md) |  | [optional] [default to undefined]
**is_flagged** | **boolean** |  | [readonly] [default to false]
**is_decisive** | **boolean** |  | [readonly] [default to false]
**is_favourite** | **boolean** |  | [readonly] [default to false]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**updated_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Annotation } from 'mosquito-alert';

const instance: Annotation = {
    id,
    observation_uuid,
    user,
    best_photo,
    classification,
    feedback,
    is_flagged,
    is_decisive,
    is_favourite,
    tags,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
