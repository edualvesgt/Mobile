import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end; /* Alinha o conteúdo no final da tela */
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  position: relative;
  z-index: 50;
  background-color: white;
  padding: 20px;
  border-top-left-radius: 15px; /* Adiciona bordas arredondadas no canto superior esquerdo */
  border-top-right-radius: 15px; /* Adiciona bordas arredondadas no canto superior direito */
  width: 100%;
  height: 80%; 
  justify-content: flex-start; /* Alinha o conteúdo no início do modal */
  align-items: center;
`;
