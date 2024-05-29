import React from 'react';

import { 
  Container,
  Wrapper,
} from './styles';
import MenuBar from '../../components/MenuBar';
import MainProfile from '../../components/MainProfile';

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainProfile />
      </Wrapper>
    </Container>
  );
}

export default Profile;