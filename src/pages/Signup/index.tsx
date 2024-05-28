import React, {useState} from 'react';
import LogoImage from '../../assets/logo.png';
import LogoCirculo from '../../assets/logo_circulo.png';
import { Link } from "react-router-dom";

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


const Signup = () => {
    const [viewRegister, setViewRegister] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

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

    const handleRegister = () => {
       setViewRegister(true);
    };

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
                        <NameInput 
                            placeholder="Nome"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                        <NicknameInput 
                            placeholder="Usuário"
                            type="text"
                            value={nickname}
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
                                <select id="month" value={selectedMonth} onChange={handleMonthChange}>
                                    <option value="">Mês</option>
                                    {months.map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            
                                <select id="day" value={selectedDay} onChange={handleDayChange}>
                                    <option value="">Dia</option>
                                    {days.map(day => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>
                            
                                <select id="year" value={selectedYear} onChange={handleYearChange}>
                                    <option value="">Ano</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </SelectGroup>
                        
                        </DateOfBirthPickerContainer>

                        <RegisterButton>Criar Conta</RegisterButton>
                    </Content>
                </Register>
            }
        </Container>
    );
}

export default Signup;