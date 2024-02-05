import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
import { FieldContent } from "./StyleBoxInput"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = "default",
    maxLength
}) => {
    return (
        <FieldContent fieldWidth ={fieldWidth}>
        
        <Label textLabel={textLabel}/>

            <Input
            placeholder = {placeholder}
            editable = {editable}
            KeyType = {keyType}
            maxLength ={maxLength}
            fieldValue = {fieldValue}
            onChangeText = {onChangeText}
            />

            

        </FieldContent>
    )
}