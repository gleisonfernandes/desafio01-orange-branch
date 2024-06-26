import React, { useState } from 'react';
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
  ShereIcon,
  StatisticsIcon,
  ModalContainer,
  VerticalLine,
  RenderDescription,
} from './styles';

import {Props} from '../types'
import NewTweet from '../NewTweet';

const Tweet = ({id, avatar, name, nickname, date, description, likes, retweets, comments, image}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const tweetPost = () => {
    console.log(id);
    navigate(`/post/${id}`);
    
  };
  return (
    <Container>
      <Body>
        <Avatar>
          <img src={avatar} alt='Image profile '/>
        </Avatar>

        <Content>
          <InfoTweet onClick={tweetPost}>
            <Header>
              <InfoHeader>
                <strong>{name}</strong>
                <span>{nickname}</span>
                <Dot />
                <time>{date}</time>
              </InfoHeader>
              <IconHeader>
                <MoreIcon />
              </IconHeader>
            </Header>

            <Description>
              {description}
            </Description>
            {image &&
              <ImageContent >
                <img src={image} />
              </ImageContent>
            }
          </InfoTweet>
          <Icons>
            <Status onClick={toggleModal}>
              <CommentIcon />
              {comments}
            </Status>
            <Status>
              <RetweetIcon />
              {retweets}
            </Status>
            <Status>
              <LikeIcon />
              {likes}
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
              <img src={avatar} alt='Image profile '/>
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
          <NewTweet description='Postar sua resposta' titleBtn='To respond'/>
        </Modal>
      </ModalContainer>
    </Container>
  );
}

export default Tweet;