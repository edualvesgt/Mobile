import styled from "styled-components";

export const Button = styled.TouchableOpacity`
width: 90%;
height: 44px;
border-radius: 5px;
padding: 12px 8px;
background-color: #496BBA;
margin-top: 15px;

`

export const ButtonTitle = styled.Text`
font-size: 14px;
font-family: "MontserratAlternates_500Medium";
color: #FFFFFF;
text-align: center;
text-transform: uppercase;

`


export const ButtonGoogle = styled.TouchableOpacity`
width: 90%;
height: 44px;
border-radius: 5px;
padding: 8px 8px;
background-color: #FAFAFA;
margin-top: 15px;
border: 2px solid #496BBA ;
flex-direction: row; /* Adicionando flex-direction: row para organizar os itens em uma linha */
align-items: center;
justify-content: center;
`

export const ButtonTitleGoogle = styled.Text`
font-size: 14px;
font-family: "MontserratAlternates_500Medium";
color: #496BBA;
text-align: center;
text-transform: uppercase;

`

export const ButtonBack = styled.TouchableOpacity`
width: 100px;
position: absolute;
margin-top: 85px;
margin-left: 20px;
align-self: flex-start;
`

