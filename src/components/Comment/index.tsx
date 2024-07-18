import React, { useEffect, useState } from 'react';
import FotoProfile from "../../assets/FotoPerfil.png";

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
import { GetAllComments } from '../../service/comment';
import { CommentProps } from '../../service/comment/types';
import { useAuth } from '../../providers/AuthProvider/useAuth';
import { useDataContext } from '../../Context';
import { GetAllUser } from '../../service/user';
import { RecentsUsers } from '../../service/user/types';
import FormatDate from '../FormatDate';

const Comment = ({tweet_id}: TweetComment) => {
  const [comments, setComments] = useState<CommentProps[]>();
  const [commentUsers, setCommentUsers] = useState<RecentsUsers[]>([]);
  const auth = useAuth();
  const { user } = useDataContext();

  useEffect(()=>{
    const getComments = async () => {
      try{
          if(!auth?.token) return;
          const response = await GetAllComments({token: auth?.token});
          if(response){
            setComments(response.data);
            console.log("Setecomments: ", response.data);
            
          }
      }catch(e){

      }
   }
   const getUsers = async () => {
    try{
        if(!auth?.token) return;
        const response = await GetAllUser({token: auth?.token});
        if(response && response.data){
          setCommentUsers(response.data);
        }
    }catch(e){
      console.error('Erro ao buscar usuários recentes:', e);
    }
}
getUsers();

    getComments();
}, [auth?.token])


  return (
    <>
        {comments?.map((item) =>
        item.tweet_id === tweet_id &&
        <>
        <Container>
            <Body>
            {commentUsers.map((itemUser) =>
            itemUser.id === item.user_id &&
            <>
                <Avatar>
                {itemUser.profileImage ?
                        <img src={itemUser.profileImage} alt='Image profile '/> : <img src={FotoProfile} alt={`imagem do perfil de ${user?.name}`} />
                    }
                </Avatar>
            
                <Content>
                <InfoComment>
                    <Header>
                    <InfoHeader>
                        <strong>{itemUser.name}</strong>
                        <span>{itemUser.nickname}</span>
                        <Dot />
                        <time>{FormatDate(item.createdAt)}</time>
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