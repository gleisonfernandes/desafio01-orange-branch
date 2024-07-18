import React, {useEffect, useState} from 'react';
import LogoImage from '../../assets/logo.png';
import LogoCirculo from '../../assets/logo_circulo.png';
import { Link, useNavigate } from "react-router-dom";

import { 
    Container,
    Background,
    RedirectSignup,
    GoogleButton,
    GoogleIcon,
    AppleButton,
    AppleIcon,
    EmailButton,
    Text,
    Register,
    Logo,
    Content,
    NameInput,
    EmailInput,
    PasswordInput,
    NicknameInput,
    RegisterButton,
    DateOfBirthPickerContainer,
    Textdate,
    SelectGroup,
} from './styles';
import { RegisterUser } from '../../service/register';
import AlertComponent from '../../components/Alert';
import { AxiosError } from 'axios';
import { useAuth } from '../../providers/AuthProvider/useAuth';


const Signup = () => {
    const auth = useAuth();
    const [viewRegister, setViewRegister] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [hasError, setHasError] = useState(false);
    const [hasSuccess, setHasSuccess] = useState(false);
    const [message, setMessage] = useState<any>();
    const [formatDateofbirth,  setFormatDateofbirth] = useState("");
    const handleCloseAlert = () => {
        setHasError(false);
        setHasSuccess(false);
    };
    const navigate = useNavigate();

    const months = Array.from({ length: 12 }, (_, index) => index + 1);
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const years = Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index);

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(e.target.value);
    };

    const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDay(e.target.value);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };

    const handleRegister =  () => {
       setViewRegister(true);
    };

    const handleRegisterUser = async () => {
        if(selectedYear == "" || selectedMonth == "" || selectedDay == ""){
            setFormatDateofbirth("");
        }else{
            setFormatDateofbirth(`${selectedYear}-${parseInt(selectedMonth) < 10 ? "0" + selectedMonth : selectedMonth}-${parseInt(selectedDay) < 10 ? "0" + selectedDay : selectedDay}`);
        }
        try {
         const response = await RegisterUser(
             {
                 name: name,
                 email: email,
                 password: password,
                 nickname: nickname,
                 dateofbirth: formatDateofbirth
             }
         )
         if(response.data !== ""){
             setMessage(response.data);
             setHasSuccess(true);
             setTimeout(() => {
                 navigate('/');
            }, 1000);
         }
         if(response.data === ""){
             setMessage(response.data);
             setHasError(true);
         }
        } catch (error) {
            if (error instanceof AxiosError) {
                setMessage(error?.response?.data);
                setHasError(true);
            } else {
                setMessage('Ocorreu um erro ao registrar o usuário.');
                setHasError(true);
            }
        }
     };

    useEffect(() => {
        auth.token && navigate("/feed")
    }, [auth.token]);

    return (
        <Container>
            <Background>
                <img src={LogoImage} alt="Logo da Orange" />
            </Background>
            {! viewRegister ?
                <RedirectSignup>
                    <strong>Acontecendo agora</strong>
                    <span>Junte-se ao OrangeX hoje</span>
                    <GoogleButton outlined><GoogleIcon />Entre com o Google</GoogleButton>
                    <AppleButton outlined><AppleIcon />Entre com a Apple</AppleButton>
                    <EmailButton outlined onClick={handleRegister}>Entrar com e-mail</EmailButton>
                    <Text>
                        Ao entrar você concorda com os <Link to="#">Termos de Serviço</Link> e <Link to="#">Política de Privacidade</Link>, 
                        incluindo o  <Link to="#">Uso de Cookie</Link>.
                    </Text>
                </RedirectSignup> :
                <Register>
                    <Content>
                        <Logo>
                            <img src={LogoCirculo} alt="Logo da Orange" />
                        </Logo>
                        <strong>Criar Conta</strong>
                        {hasError &&
                            <AlertComponent
                            severity="error"
                            title={message}
                            onClose={handleCloseAlert}
                            />
                        }
                        {hasSuccess &&
                            <AlertComponent
                            severity="success"
                            title={message}
                            onClose={handleCloseAlert}
                            />
                        }
                        <NameInput 
                            placeholder="Nome"
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                        <EmailInput 
                            placeholder="E-mail"
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput 
                            placeholder="Senha"
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <NicknameInput 
                            placeholder="Usuário"
                            type="text"
                            value={nickname}
                            required
                            onChange={(e) => setNickname(e.target.value)}
                        />

                        <DateOfBirthPickerContainer>
                            <Textdate>
                                <span>Data de nascimento</span>
                                <p>
                                    Isso não será exibido publicamente. 
                                    Confirme sua própria idade, mesmo se 
                                    esta conta for de empresa, de um animal 
                                    de estimação ou outros.
                                </p>
                            </Textdate>
                            <SelectGroup>
                                <select id="month" value={selectedMonth} onChange={handleMonthChange} required>
                                    <option value="">Mês</option>
                                    {months.map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            
                                <select id="day" value={selectedDay} onChange={handleDayChange} required>
                                    <option value="">Dia</option>
                                    {days.map(day => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>
                            
                                <select id="year" value={selectedYear} onChange={handleYearChange} required>
                                    <option value="">Ano</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </SelectGroup>
                        
                        </DateOfBirthPickerContainer>

                        <RegisterButton onClick={() => handleRegisterUser()}>Criar Conta</RegisterButton>
                    </Content>
                </Register>
            }
        </Container>
    );
}

export default Signup;