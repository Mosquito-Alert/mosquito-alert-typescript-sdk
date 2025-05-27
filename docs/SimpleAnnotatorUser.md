# SimpleAnnotatorUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**username** | **string** | Requerido. 150 carácteres como máximo. Únicamente letras, dígitos y @/./+/-/_  | [default to undefined]
**first_name** | **string** |  | [optional] [default to undefined]
**last_name** | **string** |  | [optional] [default to undefined]
**full_name** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { SimpleAnnotatorUser } from 'mosquito-alert';

const instance: SimpleAnnotatorUser = {
    id,
    username,
    first_name,
    last_name,
    full_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
