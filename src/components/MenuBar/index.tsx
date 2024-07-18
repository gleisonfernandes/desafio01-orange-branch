import React, {useEffect, useState} from 'react';
import FotoProfile from "../../assets/FotoPerfil.png";

import { 
  Container,
  PageTop, 
  Logo, 
  MenuButton,
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  ProfileIcon,
  MoreIcon,
  PageFinal,
  Avatar,
  ProfileData,
  IconMore,
 } from './styles';
import Button from '../Button';
import { useDataContext } from '../../Context';
import { useNavigate } from 'react-router-dom';




const MenuBar = () => {
  const { user } = useDataContext();
  const navigate = useNavigate();

  const handleHome= () => {
    navigate('/feed');
  }

  const handleProfile = () => {
    navigate('/profile');
  }

  return(
    <Container>
      <PageTop>
        <Logo />

        <MenuButton onClick={handleHome}>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <NotificationIcon />
          <span>Notificação</span>
        </MenuButton>

        <MenuButton>
          <MessageIcon />
          <span>Menssagens</span>
        </MenuButton>

        <MenuButton onClick={handleProfile}>
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>More</span>
        </MenuButton>

        <Button backgroundColor='orange'>
          <span>Tweet</span>
        </Button>
      </PageTop>
      <PageFinal>
        
              <Avatar>
                {user?.profileImage ?
                  <img src={user?.profileImage} alt={`imagem do perfil de ${user?.name}`} /> : <img src={FotoProfile} alt={`imagem do perfil de ${user?.name}`} />
                }
              </Avatar>
           
              <ProfileData>
                    <strong>{user?.name}</strong>
                    <span>{user?.nickname}</span>
              </ProfileData>
         
        <IconMore />
      </PageFinal>
    </Container>
  );
}

export default MenuBar;