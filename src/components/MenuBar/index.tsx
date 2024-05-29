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
import { log } from 'console';

interface User{
  id: number;
}

const MenuBar = () => {
  const [idUser, setIdUser] = useState<number>();
  useEffect(() => {
    const savedDataString = localStorage.getItem('savedId');
    console.log('1. savedDataString: ', savedDataString);
    
    if (savedDataString) {
      const savedId = JSON.parse(savedDataString);
      console.log('2. savedId: ', savedId);
      setIdUser(savedId);
    }
  }, []);
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
            item.id === idUser &&
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