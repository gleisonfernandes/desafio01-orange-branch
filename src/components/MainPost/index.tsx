import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { 
    Container,
    Header, 
    BackIcon, 
    PostInfo,
    BottomMargin,
   } from './styles';
import BottomMenu from '../MenuBottom';
import Tweet from '../Tweet';
import { mockTweets } from '../../mockData';
import Comment from '../Comment';
import { GetAllTweets } from '../../service/tweets';
import { useAuth } from '../../providers/AuthProvider/useAuth';
import { useDataContext } from '../../Context';
import { TweetProps } from '../../service/tweets/types';
import FormatDate from '../FormatDate';

const MainPost = () => {
  const { id } = useParams<{ id: string }>();
  const auth = useAuth();
    const { user } = useDataContext();
    const [tweets, setTweets] = useState<TweetProps[]>([]);
 console.log("Post: ", id);

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

 if (!id) {
    return <div>Carregando...</div>;
 }

  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>
            <PostInfo>
                <strong>Post</strong>
            </PostInfo>
        </Header>
        {tweets.map((item) =>
            item.id === parseInt(id) && 
                <>
                 <Tweet key={item.id} id={item.id} avatar={item.user?.profileImage ?? ""} name={item.user?.name ?? ""} nickname={item.user?.nickname ?? ""} date={FormatDate(item.createdAt)} description={item.description} comments={item?.comments} retweets={item?.retweets} likes={item?.likes} image={item?.tweetImage} user_id={item.user?.id} />
                 <Comment tweet_id={item.id} />
                </>
        )}
        <BottomMargin></BottomMargin>
        <BottomMenu />
    </Container>
  );
};

export default MainPost;
