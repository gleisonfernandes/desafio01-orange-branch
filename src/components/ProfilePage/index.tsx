import React from 'react';
import { mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    LinkIcon,
    BollonIcon,
    CalenderIcon,
    Followage,
    EditButton,
} from './styles';
import UserTweet from '../UserTweet/Index';

const ProfilePage = () => {
  const { id } = useDataContext();
  return (
    <Container>
        {mockUsers.map((item) =>
            item.id === id &&
            <>
                <Banner>
                    <img src={item.coverImage} alt="imagem da Capa do perfil" />
                    <Avatar>
                        <img src={item.profileImage} alt={`imagem do perfil de ${item.name}`} />
                    </Avatar>
                </Banner>

                <ProfileData>
                    <EditButton outlined>Editar</EditButton>

                    <h1>{item.name}</h1>
                    <h2>{item.nickname}</h2>

                    <p>
                        {item.bio} 
                    </p>
                    <ul>
                        <li>
                            <LocationIcon />
                            {item.city}
                        </li>
                        <li>
                            <LinkIcon />
                            <a href={`${item.site}`}>{item.site}</a>
                        </li>
                        <li>
                            <BollonIcon />
                            {item.dateofbirth}
                        </li>
                        <li>
                            <CalenderIcon />
                            Joined {item.joined}
                        </li>
                    </ul>

                    <Followage>
                        <span><strong>{item.Following}</strong> Following</span>
                        <span><strong>{item.Followers}</strong> Followers</span>
                    </Followage>
                </ProfileData>
            </>
        )}
        <UserTweet />
    </Container>
  );
}

export default ProfilePage;