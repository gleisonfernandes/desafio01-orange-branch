import React, { useState } from 'react';

import { 
    Container, 
    Header,
    PinnedTweet,
    PinIcon, 
    Tweets,
} from './styles';
import { mockTweets } from '../../mockData';

const UserTweet = () => {

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

        </Tweets>
    </Container>
  );
}

export default UserTweet;