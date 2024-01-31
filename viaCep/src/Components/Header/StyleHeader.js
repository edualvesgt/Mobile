import styled from "styled-components";


export const HeaderContainer = styled.View`
background-color: #FECC2B;
height:20%;
border-radius:0px 0px 25px 25px;
flex-direction: row;
align-items:center;
justify-content:center;

box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);

/* Maneira de fazer o Box Shadow no Android */
    /* shadow-color: rgba(0,0,0, 0.15); 
    shadow-opacity: 0.15;
    shadow-offset: 0px 4px;
    shadow-radius: 10px;
    elevation: 25; */

`
export const HeaderContent = styled.SafeAreaView`
margin-top:45px;
`
export const TextHeader = styled.Text`
color: #333E33;
font-size: 24px;
font-family:"Roboto_500Medium";
text-align: center;
`