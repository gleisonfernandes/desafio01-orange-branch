import styled, { css } from 'styled-components';
import BackgroundImg from '../../assets/background.png';
import Button from '../../components/Button';
import { ReactComponent as Google }  from '../../assets/google-icon.svg';
import { ReactComponent as Apple } from '../../assets/logo-apple.svg';
 
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  @media(max-width: 800px){
    justify-content: center;
  }
`;
export const Background = styled.div`
  display: none;
  @media(min-width: 1100px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 59.323%;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-position: center;
  }
`;

export const RedirectSignup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 0 30px;

  >strong{
      font-size: 44px;
  }
  >span{
      font-size: 26px;
  }

  @media(min-width: 1100px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 40.677%;
    margin-left: 52px;
    
    >strong{
      font-size: 64px;
    }
    >span{
      font-size: 42px;
    }
  }
`;
export const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width:403px;
  height: 62px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 48px;
  border: 1px solid #E4EAED;
  margin-bottom: 19px;

  @media(min-width: 1100px){
    max-width:403px;
  }
`;

const icon = css`
 width: 31px;
 height: 31px;

`;
export const GoogleIcon = styled(Google)`
  ${icon}
`;
export const AppleIcon = styled(Apple)`
  ${icon}
`;


export const AppleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width:403px;
  height: 62px;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #E4EAED;
  margin-bottom: 19px;

  @media(min-width: 1100px){
    max-width:403px;
  }
`;
export const EmailButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 403px;
  height: 62px;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #E4EAED;
  margin-bottom: 93px;
  @media(min-width: 1100px){
    max-width:403px;
  }
`;
export const Text = styled.div`
  width: 100%;
  max-width:403px;
  /*@media(min-width: 1100px){
    max-width:403px;
    width: 373px;
  }*/
  font-size: 14px;

  >a{
    text-decoration: none;
    color: #1E97E1;
  }
  `;

  export const Register = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 0 30px;

  >strong{
      font-size: 30px;
  }

  @media(min-width: 1100px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 40.677%;
    margin-left: 52px;
    
    >strong{
      font-size: 30px;
    }
  }
  `;

  export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 670px;
  width: 100%;
  padding: 0 10px;
  /*@media(min-width: 500px){
    padding: 0 40px;
    min-width: 670px;
  }*/
  
  >strong{
    font-size: 30px;
    margin-bottom: 16px;
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
   
`;
export const NameInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: normal;
  padding-left: 20px;
  border: 1px solid var(--outline);
  border-radius: 6px;
  margin-bottom: 10px;

  &::placeholder{
    color: #5C6C79;
  }

  @media(min-width: 1440px){
   height: 70px;
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: normal;
  padding-left: 20px;
  border: 1px solid var(--outline);
  border-radius: 6px;
  margin-bottom: 10px;

  &::placeholder{
    color: #5C6C79;
  }

  @media(min-width: 1440px){
    height: 70px;
   }
`;
export const PasswordInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: normal;
  padding-left: 20px;
  border: 1px solid var(--outline);
  border-radius: 6px;
  margin-bottom: 10px;

  &::placeholder{
    color: #5C6C79;
  }

  @media(min-width: 1440px){
    height: 70px;
   }
`;
export const NicknameInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: normal;
  padding-left: 20px;
  border: 1px solid var(--outline);
  border-radius: 6px;
  margin-bottom: 10px;

  &::placeholder{
    color: #5C6C79;
  }
  @media(min-width: 1440px){
    height: 70px;
  }
`;

export const DateOfBirthPickerContainer = styled.div`

flex-direction: row;
justify-content: space-between;
`;

export const Textdate = styled.div`
    margin-bottom: 10px;
    
    >span{
        font-size: 18px;
        font-weight: bold;
    }
    >p{
        font-size: 16px;
    }
`;

export const SelectGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    > :nth-child(1){
        width: 300px;
        height: 50px;
        padding: 5px;
        margin-right: 10px;
        border: 1px solid var(--outline);
        border-radius: 4px;
        color: var(--gray);
        font-size: 18px;
        @media(min-width: 1440px){
            height: 70px;
        }
    }
    > :nth-child(2){
        width: 159px;
        height: 50px;
        padding: 5px;
        margin-right: 10px;
        border: 1px solid var(--outline);
        border-radius: 4px;
        color: var(--gray);
        font-size: 18px;

        @media(min-width: 1440px){
            height: 70px;
        }
    }
    > :nth-child(3){
        width: 159px;
        height: 50px;
        padding: 5px;
        border: 1px solid var(--outline);
        border-radius: 4px;
        color: var(--gray);
        font-size: 18px;

        @media(min-width: 1440px){
            height: 70px;
        }
    }
`;

export const RegisterButton = styled(Button)`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  @media(min-width: 1440px){
    height: 60px;
  }
`;