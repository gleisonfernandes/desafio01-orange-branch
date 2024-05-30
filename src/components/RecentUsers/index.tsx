import React from 'react';


import { Container, Avatar, Info, FollowButton } from './styles';

import { Users } from './types';


const RecentUsers = ({avatar, name, nickname}: Users) => {
  return (
    <Container>
        <div>
            <Avatar>
            <img src={avatar} alt={`Imagem de profile de ${name}`} />;
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