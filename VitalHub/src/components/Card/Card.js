import { useState } from "react"
import { Container } from "../Container/StyleContainer"
import { StatusGray, StatusGreen } from "../Status/Status"
import { TextAbout, TextAccount, TextBlue, TextRed } from "../Text/Text"
import { CardBox, ImageCard, RowCardBox, TextCardBox } from "./StyleCard"
import CancelAppointment from "../CancelAppointment/CancelAppointment"



const Card = ({ image, time, status, onPressCard }) => {

 
    const Check = () => {

        if (status === "a") {
            return (
                <RowCardBox>
                    <StatusGreen time={time} />
                    <TextRed onPress={onPressCard} >Cancelar</TextRed>
                </RowCardBox>
            )
        } else if (status === "r") {
            return (
                <RowCardBox>
                    <StatusGray time={time} />
                    <TextBlue>Ver Prontuario</TextBlue>
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