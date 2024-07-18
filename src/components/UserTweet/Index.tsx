import React, { useEffect, useState } from 'react';

import { 
    Container, 
    Header,
    PinnedTweet,
    PinIcon, 
    Tweets,
} from './styles';
import { mockTweets } from '../../mockData';
import { useDataContext } from '../../Context';
import Tweet from '../Tweet';
import { useAuth } from '../../providers/AuthProvider/useAuth';
import { GetUserTweets } from '../../service/tweets';
import { TweetProps } from '../../service/tweets/types';
import FormatDate from '../FormatDate';

const UserTweet = () => {
 const auth = useAuth();
 const { user } = useDataContext();
 const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
 const [tweets, setTweets] = useState<TweetProps[]>([]);

 const handleClick = (index: number) => {
    setSelectedIndex(index);
 };
 useEffect(()=>{
    const getTweets = async () => {
        try{
            if(!auth?.token) return;
            const response = await GetUserTweets({token: auth?.token, id: user?.id});
            if(response){
                setTweets(response.data)
            }
        }catch(e){

        }
    }

    getTweets();
}, [auth?.token])
  return (
    <Container>
        <Header>
            <ul>
                {['Tweets', 'Tweets & replies', 'Media', 'Likes'].map((item, index) => (
                    <li
                    key={index}
                    className={selectedIndex === index ? 'active' : ''}
                    onClick={() => handleClick(index)}
                    >
                    {item}
                    </li>
                ))}
            </ul>
        </Header>

        <Tweets>
            <PinnedTweet>
                <PinIcon />
                Pinned Tweet
            </PinnedTweet>
            {tweets.sort((a, b) => b.id - a.id).map((item) => 
                 <Tweet key={item.id} id={item.id} avatar={item.user?.profileImage ?? ""} name={item.user?.name ?? ""} nickname={item.user?.nickname ?? ""} date={FormatDate(item.createdAt)} description={item.description} comments={item.comments} retweets={item.retweets} likes={item.likes} image={item?.tweetImage} user_id={item.user?.id} />
            )}
        </Tweets>
    </Container>
  );
}

export default UserTweet;