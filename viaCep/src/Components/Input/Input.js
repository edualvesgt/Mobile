import { InputText } from "./StyleInput";

export function Input({
    editable ,
    placeholder,
    fieldValue ,
    onChangeText ,
    keyType ,
    maxLength
}) {
    return(
        <InputText
        placeholder={placeholder}
        editable = {editable}
        maxLength={maxLength}
        value = {fieldValue}
        onChangeText={onChangeText}
        keyType = {keyType}
        />
        
    )
}