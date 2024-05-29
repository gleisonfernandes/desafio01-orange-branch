import React, {useEffect, useState} from 'react';

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
import { mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';




const MenuBar = () => {
  const { id } = useDataContext();
 
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
        {mockUsers.map((item) =>
            item.id === id &&
            <>
              <Avatar>
                <img src={item.profileImage} alt={`imagem do perfil de ${item.name}`} />
              </Avatar>
              <ProfileData>
                    <strong>{item.name}</strong>
                    <span>{item.nickname}</span>
              </ProfileData>
            </>
        )}
        <IconMore />
      </PageFinal>
    </Container>
  );
}

export default MenuBar;