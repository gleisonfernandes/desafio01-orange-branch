import React, { useState } from 'react';
import { mockTweets, mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';
import { 
  Container,
  Header, 
  BackIcon, 
  ProfileInfo,
 } from './styles';
import ProfilePage from '../ProfilePage';


const MainProfile = () => {
  const { id } = useDataContext();
  const filteredTweets = mockTweets.filter(tweet => tweet.user_id === id);
  const tweetCount = filteredTweets.length;
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>
            {mockUsers.map((item) =>
            item.id === id &&
                <>
                    <ProfileInfo>
                        <strong>{item.name}</strong>
                        <span>{tweetCount} Tweets</span>
                    </ProfileInfo>
                </>
            )}
        </Header>
        <ProfilePage />
        
        
    </Container>
  );
}

export default MainProfile;