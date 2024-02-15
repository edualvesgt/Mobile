import styled from "styled-components";

import {LinearGradient} from 'expo-linear-gradient'
export const HeaderContainer = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: {x: 0.05, y:1.08},
    end:{x:1 , y: 0}
})`
height:20%;
border-radius:0px 0px 25px 25px;
flex-direction: row;
align-items:center;
justify-content:center;
`
export const HeaderContent = styled.SafeAreaView`
margin-top:60px;
`

export const HeaderBox = styled.View`
width: 45%;
height: 60px;
margin-left:20px;
align-items: center;

`

export const TitleHeader = styled.Text`
color: #FECC2B;
font-size: 24px;
font-family:"Quicksand_500Medium";
text-align: center;
`

export const DataUser = styled.View`
`

export const TextDefault = styled.Text`
font-style: 14px;
font-family: "Quicksand_500Medium";
`