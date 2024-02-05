import { useEffect, useState } from "react";
import { BoxInput } from "../../Components/BoxInput/BoxInput";
import { ContainerForm, DoubleView, ScrollForm } from "./StyleHome";
import axios from "axios";
export function Home() {
    
    //hooks - states
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');



    //hooks - effect
    useEffect(() => {
        const search = async () => {
            if (cep !== "" && cep.length === 8) {
                try {
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    if (response.data) {
                        setLogradouro(response.data.logradouro);
                        setBairro(response.data.bairro);
                        setCidade(response.data.localidade);
                        setUf(response.data.uf);
                        const estado = await axios.get (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`)
                        setEstado(estado.data.nome);
                    } else {
                        alert("verifique o cep");
                    }
                } catch (error) {
                    console.log("erro ao buscar cep", error);
                }
            }
        };

        search();
    }, [cep]);

    return (
       

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel={"Informar o CEP :"}
                    placeholder={"Digite o CEP"}
                    keyType="numeric"
                    maxLength={8}   
                    fieldValue={cep}
                    editable = {true}
                    onChangeText={(tx) => {
                        setCep(tx)
                    }}
                    

                />
                <BoxInput
                    textLabel={"Logadouro"}
                    placeholder={"Logadouro ..."}
                    fieldValue={logradouro}

                />
                <BoxInput
                    textLabel={"Bairro :"}
                    placeholder={"Bairro."}
                    fieldValue={bairro}

                />
                <BoxInput
                    textLabel={"Cidade :"}
                    placeholder={"Cidade.."}
                    fieldValue={cidade}
                />
                <DoubleView>
                    <BoxInput
                        textLabel={"Estado :"}
                        placeholder={"Estado.."}
                        fieldWidth={60}
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel={"UF:"}
                        placeholder={"UF.."}
                        fieldWidth={28}
                        fieldValue={uf}
                    />
                </DoubleView>

            </ContainerForm>
        </ScrollForm>
    )
}