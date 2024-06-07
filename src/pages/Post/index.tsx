import React from 'react';

import { 
  Container,
  Wrapper,
} from './styles';
import MenuBar from '../../components/MenuBar';
import MainPost from '../../components/MainPost';
import SideBar from '../../components/SideBar/Index';

const Post = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainPost/>
        <SideBar/>
      </Wrapper>
    </Container>
  );
}

export default Post;