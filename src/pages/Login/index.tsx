import React, { useState } from 'react';
import LogoImage from '../../assets/logo_circulo.png';
import { Link } from "react-router-dom";


import { 
    Container,
    Logo,
    Content,
    EmailInput,
    PasswordInput,
    LoginButton,
    Redirect,
} from './styles';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        if (email != '' && password != '') {
            alert('Email: '+ email + ', Senha'+ password);
        } else {
            alert('Todos os campos são obgrigatórios');
        }
    };
  return (
    <Container>
        <Content>
        <Logo>
            <img src={LogoImage} alt="Logo da Orange" />
        </Logo>
        <strong>Entre no OrangeX</strong>
            <EmailInput 
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput 
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton onClick={handleLogin}>Log in</LoginButton>
            <Redirect>
            <Link to="#" >Esqueceu a senha ?</Link>
            <Link to="/signup" >Criar uma conta</Link>
            </Redirect>
        </Content>
    </Container>
  );
}

export default Login;