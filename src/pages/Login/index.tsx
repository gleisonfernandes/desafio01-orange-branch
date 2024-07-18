import React, { useEffect, useState } from 'react';
import LogoImage from '../../assets/logo_circulo.png';
import { Link, useNavigate } from "react-router-dom";
//import { useDataContext } from '../../Context';


import { 
    Container,
    Logo,
    Content,
    EmailInput,
    PasswordInput,
    LoginButton,
    Redirect,
} from './styles';
import { useAuth } from '../../providers/AuthProvider/useAuth';
import AlertComponent from '../../components/Alert';
import { AxiosError } from 'axios';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const [hasError, setHasError] = useState<boolean>();
    const [message, setMessage] = useState('');
    const auth = useAuth();
    //const { setId } = useDataContext();
    const handleCloseAlert = () => {
        setHasError(false);
    };

    const handleLogin = async () => {
        if(email == '' || password ==''){
            setHasError(true);
            setMessage("Usuário e senha não podem ser vazios.");
        }else{
            try {
                const response = await auth.authenticate(email, password);
                setHasError(true);
                if(response === undefined){
                    setHasError(true);
                    setMessage("Verifique seu usuário e senha.");
                }else{

                    navigate("/feed");
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    setMessage('Ocorreu um erro ao fazer login com usuário.');
                    setHasError(true);
                } else {
                    setMessage('Ocorreu um erro ao fazer login com usuário.');
                    setHasError(true);
                }
            }
        }
        
    };

    useEffect(() => {
        auth.token && navigate("/feed")
    }, [auth.token])
  return (
    <Container>
        <Content>
        <Logo>
            <img src={LogoImage} alt="Logo da Orange" />
        </Logo>
        <strong>Entre no OrangeX</strong>
            {hasError &&
                <AlertComponent
                    severity="error"
                    title={message}
                    onClose={handleCloseAlert}
                />
            }
            <EmailInput 
                placeholder="E-mail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput 
                placeholder="Senha"
                type="password"
                required
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