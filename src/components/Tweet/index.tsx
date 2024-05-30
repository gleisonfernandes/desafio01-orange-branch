import React from 'react';

import { 
  Container, 
  Body,
  Avatar,
  Content,
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
} from './styles';

import {Props} from '../types'

const Tweet = ({id, avatar, name, nickname, date, description, likes, retweets, comments, image}: Props) => {
  return (
    <Container>
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
          <Icons>
            <Status>
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
    </Container>
  );
}

export default Tweet;