import { InputForm, InputProfile } from "../Input/StyleInput"
import { Label } from "../Label/Label"
import { FieldContent } from "./StyleBox"

export const BoxInput = ({ textLabel, placeholder, fieldWidth = 90, editable = false }) => {

    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel} />

            <InputProfile
                editable={editable}
                placeholder={placeholder}
            />
        </FieldContent>
    )
}



export const BoxInputForm = ({ textLabel, placeholder, fieldWidth = 90, fieldHeigth, editable = false }) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel} />

            <InputForm
                editable={editable}
                fieldHeigth={fieldHeigth}
                placeholder={placeholder}
            />
        </FieldContent>
    )
}