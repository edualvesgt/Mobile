import styled from "styled-components"

export const CardBoxClinic = styled.View`
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1); /* Adiciona box-shadow na parte inferior */
background-color: #FFFFFF;
width: 90%;
height: 84px;
padding: 15px;
margin-top: 20px;

flex-direction: row;
justify-content:space-between;
align-items:center;
gap:10px;
/* border: 1px; */
`
export const TextCardBox = styled.View`
background-color: #FFFFFF;
width: 40%;
/* align-content:flex-end; */
/* gap:3px; */
padding-bottom: 10px;
border: 1px;
/* margin-bottom: 10px; */
`

export const AllStatusBox = styled.View`
width: 20%;
display:flex;
border: 1px;
justify-content:space-between;
background-color: #FFFFFF;
`