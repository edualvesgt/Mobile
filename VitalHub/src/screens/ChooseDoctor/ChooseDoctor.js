import { useState } from "react"
import Card from "../../components/Card/Card"
import CardDoctor from "../../components/CardDoctor/CardDoctor"
import { ContainerClinic, FlatListClinic } from "../../components/Container/StyleContainer"
import { Title } from "../../components/Title/StyleTitle"
import { Button, ButtonTitle } from "../../components/Button/Button"
import { LinkCancel } from "../../components/Links/StyleLink"

export const ChooseDoctor = ({ navigation }) => {

    const [select, setSelected] = useState('')

    const rawData = [
        {
            name: "Doutor Eduardo ",
            field: "Pediatra"
        },
        {
            name: "Doutor Eduardo ",
            field: "Pediatra"
        },
        {
            name: "Doutor Eduardo ",
            field: "Pediatra"
        },
        {
            name: "Doutor Eduardo ",
            field: "Pediatra"
        },
        
    ]
    return (
        <ContainerClinic>
            <Title>Selecionar Medico </Title>

            <FlatListClinic
                data={rawData}
                renderItem={({ item }) =>
                    <CardDoctor
                        select={select}
                        onPress={() => { setSelected(item.name) }}
                        name={item.name}
                        field={item.field}
                    />} />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
            <LinkCancel onPress={() => navigation.navigate('ChooseClinic')}> Cancelar </LinkCancel>

        </ContainerClinic>
    )
} 