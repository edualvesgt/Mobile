import { Container, DoubleView } from "../Container/StyleContainer"
import { StatusGray, StatusGreen } from "../Status/Status"
import { TextAbout, TextAccount, TextBlue, TextRed } from "../Text/Text"
import { CardBox, ImageCard, RowCardBox, TextCardBox } from "./StyleCard"



const Card = ({ image, time, status, onPressCard, onPressShow }) => {


    const Check = () => {

        if (status === "a") {
            return (
                <RowCardBox>
                    <DoubleView style={{ justifyContent: 'space-between' }}>
                        <StatusGreen time={time} />
                        <TextRed onPress={onPressCard} >Cancelar</TextRed>
                    </DoubleView>

                </RowCardBox>
            )
        } else if (status === "r") {
            return (
                <RowCardBox>
                    <DoubleView style={{ justifyContent: 'space-between' }}>
                        <StatusGray time={time} />
                        <TextBlue onPress={onPressShow}>Ver Prontuario</TextBlue>
                    </DoubleView>
                </RowCardBox>

            )
        } else if (status === "c") {
            return (
                <RowCardBox>
                    <StatusGray time={time} />
                </RowCardBox>
            )
        }
    }


    return (
        <CardBox>
            <ImageCard source={image} />


            <Container>

                <TextCardBox>
                    <TextAccount>Richard Kosta</TextAccount>
                    <TextAbout>22 anos  Rotina </TextAbout>
                </TextCardBox>

                {Check()}

            </Container>


        </CardBox>
    )
}

export default Card




