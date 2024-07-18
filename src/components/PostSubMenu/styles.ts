import styled from 'styled-components';

export const SubMenu = styled.div<{ isOpenSubMenu: boolean }>`
  position: absolute;
  top: 25px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: ${({ isOpenSubMenu }) => (isOpenSubMenu ? 'block' : 'none')};
`;

export const SubMenuOptions = styled.div`
  padding: 5px 0;
`;

export const SubMenuOption = styled.div`
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;
export const ModalContainer = styled.div`
  margin-top: 0px;
`;

export const ButtonsGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;

     > Button{
        width: 90px; 
     }
`;