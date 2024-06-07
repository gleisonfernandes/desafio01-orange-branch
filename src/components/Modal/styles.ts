import styled from 'styled-components';

import Button from '../Button';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  min-width: 300px;
  max-width: 556px;
  margin: 0px 0px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  position: relative;

  @media(min-width: 650px){
    margin: 40px 120px;
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 15px;
  font-weight: bold;
  
 &:hover{
    background: none;
    border: none;
 }
`;
