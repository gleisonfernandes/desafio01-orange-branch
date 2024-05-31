import React from 'react';

import { 
  Container,
  Wrapper,
} from './styles';
import MenuBar from '../../components/MenuBar';
import MainFeed from '../../components/MainFeed';
import SideBar from '../../components/SideBar/Index';

const Feed = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainFeed />
        <SideBar/>
      </Wrapper>
    </Container>
  );
}

export default Feed;