import React from 'react';

import { 
  Container, 
  Body,
  Avatar,
  Content,
  InfoComment,
  Header,
  InfoHeader,
  Dot,
  IconHeader,
  MoreIcon,
  Description,
  ImageContent,
} from './styles';

import {TweetComment} from '../types'
import { mockTweetComment, mockUsers } from '../../mockData';

const Comment = ({tweet_id}: TweetComment) => {
  if (!tweet_id) {
        return <div>Carregando...</div>; // Ou qualquer outro indicativo de carregamento enquanto os parâmetros da rota não estão disponíveis
  }
  return (
    <>
        {mockTweetComment.map((item) =>
        item.tweet_id === tweet_id &&
        <>
        <Container>
            <Body>
            {mockUsers.map((itemUser) =>
            itemUser.id === item.user_id &&
            <>
                <Avatar>
                <img src={itemUser.profileImage} alt='Image profile '/>
                </Avatar>
            
                <Content>
                <InfoComment>
                    <Header>
                    <InfoHeader>
                        <strong>{itemUser.name}</strong>
                        <span>{itemUser.nickname}</span>
                        <Dot />
                        <time>{item.date}</time>
                    </InfoHeader>
                    <IconHeader>
                        <MoreIcon />
                    </IconHeader>
                    </Header>

                    <Description>
                    {item.description}
                    </Description>
                    {item.image &&
                    <ImageContent >
                        <img src={item.image} />
                    </ImageContent>
                    }
                </InfoComment>
                </Content>
                </>
            )}
            </Body>
            </Container>
        </>
        )}
    </>
    
  );
}

export default Comment;