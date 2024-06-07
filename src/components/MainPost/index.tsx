import React from 'react';

import { useParams } from 'react-router-dom';

import { 
    Container,
    Header, 
    BackIcon, 
    PostInfo,
   } from './styles';
import BottomMenu from '../MenuBottom';
import Tweet from '../Tweet';
import { mockTweets } from '../../mockData';
import Comment from '../Comment';

const MainPost = () => {
  const { id } = useParams<{ id: string }>(); // Supondo que você esteja usando React Router para manipulação de rotas
 console.log("Post: ", id); // Exibe o ID na console

 if (!id) {
    return <div>Carregando...</div>; // Ou qualquer outro indicativo de carregamento enquanto os parâmetros da rota não estão disponíveis
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
        {mockTweets.map((item) =>
            item.id === parseInt(id) && 
                <>
                 <Tweet key={item.id} id={item.id} avatar={item.avatar} name={item.name} nickname={item.nickname} date={item.date} description={item.description} comments={item.comments} retweets={item.retweets} likes={item.likes} image={item?.image} />
                 <Comment tweet_id={item.id} />
                </>
        )}
        <BottomMenu />
    </Container>
  );
};

export default MainPost;
