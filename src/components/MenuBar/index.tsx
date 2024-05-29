import React from 'react';

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

const MenuBar = () => {
  return(
    <Container>
      <PageTop>
        <Logo />

        <MenuButton>
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

        <MenuButton>
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
        <Avatar />
        <ProfileData>
          <strong>User Teste</strong>
          <span>@usuarioTeste</span>
        </ProfileData>
        <IconMore />
      </PageFinal>
    </Container>
  );
}

export default MenuBar;