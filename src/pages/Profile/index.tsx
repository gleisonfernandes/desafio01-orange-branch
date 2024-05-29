import React, { useState } from 'react';
import LogoImage from '../../assets/logo_circulo.png';
import { Link, useNavigate } from "react-router-dom";
import { mockUsers } from '../../mockData';


import { 
    Container,
    
} from './styles';
import MenuBar from '../../components/MenuBar';

const Profile = () => {
  return (
    <Container>
        <MenuBar />
    </Container>
  );
}

export default Profile;