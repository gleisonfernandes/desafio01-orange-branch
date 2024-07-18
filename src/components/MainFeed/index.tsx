import React, { useEffect, useState } from 'react';
import FotoProfile from "../../assets/FotoPerfil.png";

import { 
    Container,
    Header, 
    CustomizeIcon, 
    FeedInfo,
    BottomMargin,
   } from './styles';
  import BottomMenu from '../MenuBottom';
import NewTweet from '../NewTweet';
import Tweet from '../Tweet';
import { useAuth } from "../../providers/AuthProvider/useAuth";
import { GetAllTweets } from '../../service/tweets';
import { TweetProps } from '../../service/tweets/types';
import { useDataContext } from '../../Context';
import FormatDate from '../FormatDate';

const MainFeed = () => {
    const auth = useAuth();
    const { user } = useDataContext();
    const [tweets, setTweets] = useState<TweetProps[]>([]);

    useEffect(()=>{
        const getTweets = async () => {
            try{
                if(!auth?.token) return;
                const response = await GetAllTweets({token: auth?.token});
                if(response){
                    setTweets(response.data)
                    console.log('Tweets: ', response.data);
                    
                }
            }catch(e){

            }
        }

        getTweets();
    }, [auth?.token])
    
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
        <NewTweet description='O que está acontecendo' titleBtn='Tweet'/>
        {tweets.map((item) => 
            <>
                <Tweet key={item.id} id={item.id} avatar={item.user?.profileImage ?? ""} name={item.user?.name ?? ""} nickname={item.user?.nickname ?? ""} date={FormatDate(item.createdAt)} description={item.description} comments={item.comments} retweets={item.retweets} likes={item.likes} image={item?.tweetImage} user_id={item.user?.id} />
            </>
        )}
        <BottomMargin></BottomMargin>
        <BottomMenu />
    </Container>
  );
};

export default MainFeed;
