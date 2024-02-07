import styled from "styled-components";

export const Input = styled.TextInput.attrs({placeholderTextColor :"#34898F", })`
width:90%;
height:53px;
padding:16px;
margin-top: 15px;
margin-bottom: 15px;
border: 2px solid #49B3BA;
border-radius: 5px;

color: #34898F;
font-size:16px;
font-family:"MontserratAlternates_600SemiBold";
`

export const InputCheck = styled.TextInput.attrs({placeholderTextColor :"#34898F", })`
border: 2px solid #77CACF;
width: 65px;
height: 62px;
border-radius: 5px;
padding: 5px 19px;
margin-bottom: 30px;
color: #34898F ;
font-size: 40px;
font-family: "Quicksand_600SemiBold";
`