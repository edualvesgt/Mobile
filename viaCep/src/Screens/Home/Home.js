import { View } from "react-native";
import { BoxInput } from "../../Components/BoxInput/BoxInput";
import { ContainerForm, DoubleView, ScrollForm } from "./StyleHome";
export function Home() {
    
    const cep = "08150-580"
    const logadouro = "Rua padre Vicente de Araujo "
    const bairro= "Jd Vila Nova Curuca"
    const cidade = "Sao Paulo"
    const estado = "Sao Paulo"
    const uf = "SP"

    return (
        //ScroolForm
        //ContainerForm
        //BoxInput
        //Label
        //Input

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel={"Informar o CEP :"}
                    placeholder={"Digite o CEP"}
                    keyTitle="numeric"
                    maxLength={9}
                />
                <BoxInput
                    textLabel={"Logadouro"}
                    placeholder={"Logadouro ..."}

                />
                <BoxInput
                    textLabel={"Bairro :"}
                    placeholder={"Bairro."}

                />
                <BoxInput
                    textLabel={"Cidade :"}
                    placeholder={"Cidade.."}
                />
                <DoubleView>
                    <BoxInput
                        textLabel={"Estado :"}
                        placeholder={"Estado.."}
                        fieldWidth={60}
                    />
                    <BoxInput
                        textLabel={"UF:"}
                        placeholder={"UF.."}
                        fieldWidth={28}
                    />
                </DoubleView>

            </ContainerForm>
        </ScrollForm>
    )
}