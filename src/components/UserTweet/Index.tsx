import React, { useState } from 'react';

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

const UserTweet = () => {
 const { id } = useDataContext();
 const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

 const handleClick = (index: number) => {
    setSelectedIndex(index);
 };

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
            {mockTweets.map((item) => 
                item.user_id === id &&
                <>
                 <Tweet key={item.id} id={item.id} avatar={item.avatar} name={item.name} nickname={item.nickname} date={item.date} description={item.description} comments={item.comments} retweets={item.retweets} likes={item.likes} image={item?.image} />
                </>
            )}
        </Tweets>
    </Container>
  );
}

export default UserTweet;