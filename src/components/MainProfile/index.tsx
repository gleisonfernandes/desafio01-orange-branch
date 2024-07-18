import React, { useEffect, useState } from 'react';
import { mockTweets, mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';
import { useAuth } from "../../providers/AuthProvider/useAuth";
import { 
  Container,
  Header, 
  BackIcon, 
  ProfileInfo,
 } from './styles';
import ProfilePage from '../ProfilePage';
import BottomMenu from '../MenuBottom';
import { TweetProps } from '../../service/tweets/types';
import { GetUserTweets } from '../../service/tweets';




const MainProfile = () => {
  const { user } = useDataContext();
  const auth = useAuth();
  const [tweetCount, setTweetCount] = useState(0);
  useEffect(()=>{
    const getTweets = async () => {
        try{
            if(!auth?.token) return;
            const response = await GetUserTweets({token: auth?.token, id: user?.id});
            if(response){
                setTweetCount(response.data.length)
            }
        }catch(e){

        }
    }
    getTweets();
}, [auth?.token])
  
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>
            <ProfileInfo>
                <strong>{user?.name}</strong>
                <span>{tweetCount} Tweets</span>
            </ProfileInfo>
        </Header>
        <ProfilePage />

        <BottomMenu />
        
        
    </Container>
  );
}

export default MainProfile;