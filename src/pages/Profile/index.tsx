import React, { useState } from 'react';
import LogoImage from '../../assets/logo_circulo.png';
import { Link, useNavigate } from "react-router-dom";
import { mockUsers } from '../../mockData';


import { 
    Container,
    
} from './styles';

const Profile = () => {
  return (
    <Container>
        <h1>Profile</h1>
    </Container>
  );
}

export default Profile;