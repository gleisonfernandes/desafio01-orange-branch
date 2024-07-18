import React, { useEffect, useState } from 'react';
import FotoProfile from "../../assets/FotoPerfil.png";
import Modal from '../Modal';
import { useNavigate } from "react-router-dom";

import { 
  Container, 
  Body,
  Avatar,
  Content,
  InfoTweet,
  Header,
  InfoHeader,
  Dot,
  IconHeader,
  MoreIcon,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  LikeFillIcon,
  ShereIcon,
  StatisticsIcon,
  ModalContainer,
  VerticalLine,
  RenderDescription,
} from './styles';

import {Props} from '../types'
import NewTweet from '../NewTweet';
import { useDataContext } from '../../Context';
import { useAuth } from '../../providers/AuthProvider/useAuth';
import { AxiosError } from 'axios';
import { DeleteLike, GetAllLikes, PostLike } from '../../service/like';
import { GetAllComments } from '../../service/comment';
import PostSubMenu from '../PostSubMenu';

const Tweet = ({id, avatar, name, nickname, date, description, likes, retweets, comments, image, user_id}: Props) => {
  const auth = useAuth();
  const { user } = useDataContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [countLikes, setCountLikes] = useState(0);
  const [countComments, setCountComments] = useState(0);
  const navigate = useNavigate();
  const [openSubMenuId, setOpenSubMenuId] = useState<number | null>(null);

  const toggleSubMenu = (postId: number) => {
    setOpenSubMenuId(openSubMenuId === postId ? null : postId);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleLike = async () => {
    if(!auth?.token) return;
        if(!user?.id) return;

        try {
          let response;
          if(isLike === true){
            response = await DeleteLike({token: auth?.token, tweet_id: id,  user_id: user?.id});
          }else{
            response = await PostLike({token: auth?.token, tweet_id: id,  user_id: user?.id});
          }
          if(response.status === 201){
            setIsLike(true);
            setCountLikes(countLikes + 1);
          }else{
            setIsLike(false);
            setCountLikes(countLikes - 1);
          }
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log(error?.response?.data);
        }
        }
  }
  const tweetPost = () => {
    console.log(id);
    navigate(`/post/${id}`);
    
  };
  useEffect(()=>{
    const getLikes = async () => {
        try{
            if(!auth?.token) return;
            const response = await GetAllLikes({token: auth?.token});
            if(response){
              console.log(response.data);
              response.data.map(tweet => {
                if(tweet.tweet_id === id){
                  const filteredLikes = response.data.filter(likes => likes.tweet_id === id);
                  setCountLikes(filteredLikes.length);
                  if(tweet.user_id ===user?.id){
                    setIsLike(true);
                  }
                }
              })  
            }
        }catch(e){

        }
    }

    const getComments = async () => {
      try{
          if(!auth?.token) return;
          
          const response = await GetAllComments({token: auth?.token});
          if(response){
            console.log("Comments: ", response.data);
            response.data.map(comment => {
              if(comment.tweet_id === id){
                console.log(comment.tweet_id);
                const filteredComments = response.data.filter(comment => comment.tweet_id === id);
                console.log(filteredComments.length);
                
                setCountComments(filteredComments.length);
              }
            })  
          }
      }catch(e){

      }
  }

    getComments();
    getLikes();
}, [auth?.token])
  return (
    <Container>
      <Body>
        <Avatar>
          {avatar ?     
            <img src={avatar} alt={`imagem do perfil de ${name}`} /> : <img src={FotoProfile} alt={`imagem do perfil de ${name}`} />    
          }
        </Avatar>

        <Content>
          <InfoTweet>
            <Header>
              <InfoHeader>
                <strong>{name}</strong>
                <span>{nickname}</span>
                <Dot />
                <time>{date}</time>
              </InfoHeader>
              <IconHeader>
                <MoreIcon onClick={() => toggleSubMenu(id)}/>
                {openSubMenuId === id && user_id === user?.id && <PostSubMenu postId={id} descriptionTweet={description} imageTweet={image} isOpenSubMenu={true} toggleSubMenu={() => toggleSubMenu(id)} />}
              </IconHeader>
            </Header>

            <Description onClick={tweetPost}>
              {description}
            </Description>
            {image &&
              <ImageContent onClick={tweetPost}>
                <img src={image} />
              </ImageContent>
            }
          </InfoTweet>
          <Icons>
            <Status onClick={toggleModal}>
              <CommentIcon />
              {countComments}
            </Status>
            <Status>
              <RetweetIcon />
              {retweets}
            </Status>
            <Status onClick={() => handleLike()}>
              {isLike ? <LikeFillIcon/> : <LikeIcon />}
              {countLikes}
            </Status>
            <Status>
              <ShereIcon />
            </Status>
            <Status>
              <StatisticsIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
      <ModalContainer>
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <h3>New Comment</h3>
          <Body>
            <Avatar>
              {avatar ?     
                <img src={avatar} alt={`imagem do perfil de ${name}`} /> : <img src={FotoProfile} alt={`imagem do perfil de ${name}`} />    
              }
            </Avatar>
            <Content>
              <Header>
                <InfoHeader>
                  <strong>{name}</strong>
                  <span>{nickname}</span>
                  <Dot />
                  <time>{date}</time>
                </InfoHeader>
              </Header>
              <RenderDescription>
                <VerticalLine />
                <Description>
                  {description}
                </Description>
              </RenderDescription>
            </Content>
          </Body>
          <VerticalLine />
          <NewTweet id={id} description='Postar sua resposta' titleBtn='Comment'/>
        </Modal>
      </ModalContainer>
    </Container>
  );
}

export default Tweet;