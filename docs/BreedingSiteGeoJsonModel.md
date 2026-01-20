# BreedingSiteGeoJsonModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**BiteGeoJsonModelType**](BiteGeoJsonModelType.md) |  | [optional] [default to undefined]
**id** | **string** | UUID randomly generated on phone to identify each unique report version. Must be exactly 36 characters (32 hex digits plus 4 hyphens). | [optional] [readonly] [default to undefined]
**geometry** | **any** |  | [optional] [default to undefined]
**properties** | [**BreedingSiteGeoJsonModelProperties**](BreedingSiteGeoJsonModelProperties.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BreedingSiteGeoJsonModel } from 'mosquito-alert';

const instance: BreedingSiteGeoJsonModel = {
    type,
    id,
    geometry,
    properties,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
