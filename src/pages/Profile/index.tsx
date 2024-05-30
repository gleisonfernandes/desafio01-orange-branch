import React from 'react';

import { 
  Container,
  Wrapper,
} from './styles';
import MenuBar from '../../components/MenuBar';
import MainProfile from '../../components/MainProfile';
import SideBar from '../../components/SideBar/Index';

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainProfile />
        <SideBar/>
      </Wrapper>
    </Container>
  );
}

export default Profile;