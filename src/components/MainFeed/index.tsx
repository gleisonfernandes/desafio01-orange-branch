import React, { useState } from 'react';

import { 
    Container,
    Header, 
    CustomizeIcon, 
    FeedInfo,
   } from './styles';
  import BottomMenu from '../MenuBottom';
import NewTweet from '../NewTweet';
import Tweet from '../Tweet';
import { mockTweets } from '../../mockData';

const MainFeed = () => {

  return (
    <Container>
        <Header>
            <FeedInfo>
                <strong>Home</strong>
            </FeedInfo>
            <button>
                <CustomizeIcon />
            </button>
        </Header>
        <NewTweet/>
        {mockTweets.map((item) => 
                <>
                 <Tweet key={item.id} id={item.id} avatar={item.avatar} name={item.name} nickname={item.nickname} date={item.date} description={item.description} comments={item.comments} retweets={item.retweets} likes={item.likes} image={item?.image} />
                </>
            )}

        <BottomMenu />
    </Container>
  );
};

export default MainFeed;
