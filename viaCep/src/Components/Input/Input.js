import { InputText } from "./StyleInput";

export function Input({
    editable ,
    placeholder,
    fieldValue ,
    onchangeText ,
    keyTitle ,
    maxLength
}) {
    return(
        <InputText
        placeholder={placeholder}
        editable={true}
        keyboardType = {maxLength}
        maxLength={maxLength}
        value = {fieldValue}
        onchangeText={onchangeText}
        />
        
    )
}