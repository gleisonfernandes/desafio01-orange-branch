import React, { useEffect, useState } from 'react';
import FotoProfile from "../../assets/FotoPerfil.png";


import { Container, Avatar, Info, FollowButton } from './styles';

import { Users } from './types';


const RecentUsers = ({avatar, name, nickname}: Users) => {
  return (
    <Container>
        <div>
            <Avatar>
            {avatar ?
              <img src={avatar} alt={`imagem do perfil de ${name}`} /> : <img src={FotoProfile} alt={`imagem do perfil de ${name}`} />
            }
            </Avatar>
        
            <Info>
                <strong>{name}</strong>
                <span>{nickname}</span>
            </Info>
        </div>
        <FollowButton backgroundColor='black'>Seguir</FollowButton>
    </Container>
  );
}

export default RecentUsers;