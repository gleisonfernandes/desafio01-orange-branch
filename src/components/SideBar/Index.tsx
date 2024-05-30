import React from 'react';
import { mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
    Title,
    Item,

} from './styles';

import RecentUsers from '../RecentUsers';

const SideBar = () => {
  const { id } = useDataContext();
  const filteredUser = mockUsers.filter(user => user.id != id).slice(-2);
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Search Twitter" />
            <SearchIcon />
        </SearchWrapper>
        <Body>
        <Item>
          <Title>Usuarios recente</Title>
        </Item>
        {filteredUser.map((item) => 
        <Item>
            <RecentUsers avatar={item.profileImage} name={item.name} nickname={item.nickname} />
        </Item>
        )}

        </Body>
    </Container>
  );
}

export default SideBar;