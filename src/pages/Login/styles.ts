import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  padding: 0 10px;
  @media(min-width: 500px){
    padding: 0;
    min-width: 450px;
  }
  
  >strong{
    font-size: 42px;
    margin-bottom: 36px;
  }
`;
export const Logo = styled.div`
  margin: 25px 0;
  align-self: flex-start; 
`;
export const EmailInput = styled.input`
  width: 100%;
  height: 70px;
  font-size: 18px;
  font-weight: normal;
  padding-left: 20px;
  border: 1px solid var(--outline);
  border-radius: 4px;
  margin-bottom: 25px;

  &::placeholder{
    color: #5C6C79;
  }
`;
export const PasswordInput = styled.input`
  width: 100%;
  height: 70px;
  font-size: 18px;
  font-weight: normal;
  padding-left: 20px;
  border: 1px solid var(--outline);
  border-radius: 4px;
  margin-bottom: 25px;

  &::placeholder{
    color: #5C6C79;
  }
`;
export const LoginButton = styled(Button)`
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`;
export const Redirect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    font-weight: normal;

    >a{
        text-decoration: none;
        color: #1DA1F2;
    }
`;
