import { Container } from "../Container/StyleContainer"
import { StatusGray, StatusGreen } from "../Status/Status"
import { TextAccount, TextBlue, TextRed } from "../Text/Text"
import { CardBox, ImageCard, RowCardBox, TextCardBox } from "./StyleCard"

const Card = ({ image, time, status }) => {

    const Check = () => {

        if (status === "a") {
            return (
                <RowCardBox>
                    <StatusGreen time={time} />

                    <TextRed>Cancelar</TextRed>

                </RowCardBox>
            )

           
        } else if (status === "r") {

            return (
                <RowCardBox>
                    <StatusGray time={time} />
        
                    <TextBlue>Ver Prontuario</TextBlue>
        
                </RowCardBox>
                    )
        }
        else if (status === "c") {
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
                    <TextAccount>22. anos</TextAccount>

                </TextCardBox>


                {Check()}
            </Container>
        </CardBox>
    )
}

export default Card