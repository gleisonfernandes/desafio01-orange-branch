import React, { useEffect, useState } from 'react';
import { mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';
import { useAuth } from "../../providers/AuthProvider/useAuth";
import { GetAllUser } from '../../service/user';
import { RecentsUsers} from '../../service/user/types';

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
  const { user } = useDataContext();
  const [recentsUsers, setRecentsUsers] = useState<RecentsUsers[]>([]);
  const auth = useAuth();

  useEffect(()=>{
    const getUsers = async () => {
        try{
            if(!auth?.token) return;
            const response = await GetAllUser({token: auth?.token});
            if(response && response.data){
              setRecentsUsers(response.data);
            }
        }catch(e){
          console.error('Erro ao buscar usuários recentes:', e);
        }
    }
    getUsers();
}, [auth?.token])
const filteredUser = recentsUsers.filter(users => users.id != user?.id).slice(-2);
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