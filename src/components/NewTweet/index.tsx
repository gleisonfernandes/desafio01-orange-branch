import React, { useEffect, useState } from 'react';
import { useDataContext } from '../../Context';
import FotoProfile from "../../assets/FotoPerfil.png";
import { useAuth } from "../../providers/AuthProvider/useAuth";
import { 
    Container, 
    NewTweets,
    Avatar,
    TextArea,
    FileButon, 
    FileInputWrapper, 
    ImageIcon,
    GifIcon,
    StatsIcon,
    SmileIcon,
    ScheduleIcon,  
    FileInput,
    PreviewImage, 
    TweetButton, 
} from './styles';
import { PostTweet, UpdateTweets } from '../../service/tweets';
import { AxiosError } from 'axios';
import AlertComponent from '../Alert';
import { useNavigate } from 'react-router-dom';
import { PostComments } from '../../service/comment';

interface FormProps {
  id?: number;
  description?: string;
  image?: string;
  titleBtn: string;
}

const NewTweet = ({id, description, image, titleBtn}: FormProps) => {
   const navigate = useNavigate();
    const { user } = useDataContext();
    const auth = useAuth();

    const [newTweetText, setNewTweetText] = useState<string>('');
    const [newTweetImage, setNewTweetImage] = useState<string>('');
    const [imagePreview, setImagePreview] = useState<string>('');
    const [hasError, setHasError] = useState(false);
    const [hasSuccess, setHasSuccess] = useState(false);
    const [message, setMessage] = useState<any>();

    const handleCloseAlert = () => {
      setHasError(false);
      setHasSuccess(false);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewTweetText(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (typeof reader.result === 'string') {
              setNewTweetImage(reader.result);
              setImagePreview(reader.result);
            }
          };
          reader.readAsDataURL(file);
        }
      };

      const handleSubmit = async () => {
        if(!auth?.token) return;
        if(!user?.id) return;
        if(titleBtn === "Tweet"){
          try {
            const response = await PostTweet({token: auth?.token, description: newTweetText ?? "", tweetImage: newTweetImage, user_id: user?.id})
  
            if(response.data){
              setMessage("Tweet postado.");
              setHasSuccess(true);
              setTimeout(() => {
                setHasSuccess(false);
                window.location.reload();
             }, 1000);
            }
          } catch (error) {
            if (error instanceof AxiosError) {
              console.log(error?.response?.data);
              
              setMessage(error?.response?.data);
              setHasError(true);
              setTimeout(() => {
                setHasError(false);
             }, 2000);
            } else {
                setMessage('Ocorreu um erro ao registrar o tweet.');
                setHasError(true);
                setTimeout(() => {
                  setHasError(false);
              }, 2000);
            }
          }
        }else if(titleBtn === "Salvar"){
          try {
            const response = await UpdateTweets({token: auth?.token, id: id, description: newTweetText ?? "", tweetImage: newTweetImage, user_id: user?.id})
  
            if(response.data){
              setMessage("Tweet Editado com sucesso.");
              setHasSuccess(true);
              setTimeout(() => {
                setHasSuccess(false);
                window.location.reload();
             }, 1000);
            }
          } catch (error) {
            if (error instanceof AxiosError) {
              console.log(error?.response?.data);
              
              setMessage(error?.response?.data);
              setHasError(true);
              setTimeout(() => {
                setHasError(false);
             }, 2000);
            }else {
                setMessage('Ocorreu um erro ao registrar o tweet.');
                setHasError(true);
                setTimeout(() => {
                  setHasError(false);
              }, 2000);
            }
          }

        }else if(titleBtn === "Comment"){          
          try {
            const response = await PostComments({token: auth?.token, description: newTweetText ?? "", image: newTweetImage, tweet_id: id ?? 0, user_id: user?.id})
  
            if(response.data){
              setMessage("Comentário postado.");
              setHasSuccess(true);
              setTimeout(() => {
                setHasSuccess(false);
                window.location.reload();
             }, 1000);
            }
          } catch (error) {
            if (error instanceof AxiosError) {
              console.log(error?.response?.data);
              
              setMessage(error?.response?.data);
              setHasError(true);
              setTimeout(() => {
                setHasError(false);
             }, 2000);
            } else {
                setMessage('Ocorreu um erro ao registrar o Comentário.');
                setHasError(true);
                setTimeout(() => {
                  setHasError(false);
              }, 2000);
            }
          }
        }
      }
    useEffect(() => {
      if(titleBtn === "Salvar"){
        setNewTweetText(description ?? '');
        setNewTweetImage(image ?? '');
        setImagePreview(image ?? '');
      }else if(titleBtn === "Confirmar"){
        setNewTweetText(description ?? '');
        setNewTweetImage(image ?? '');
        setImagePreview(image ?? '');
      }
    }, []);
    return (
        <Container>
          {hasError &&
            <AlertComponent
              severity="error"
              title={message}
              onClose={handleCloseAlert}
            />
          }
          {hasSuccess &&
            <AlertComponent
              severity="success"
              title={message}
              onClose={handleCloseAlert}
            />
          }
          <NewTweets>
          
             <>
                <Avatar>
                  {user?.profileImage ?
                    <img src={user?.profileImage} alt={`imagem do perfil de ${user?.name}`} /> : <img src={FotoProfile} alt={`imagem do perfil de ${user?.name}`} />
                  }
                </Avatar>
             </>
          
            <TextArea
              placeholder={description}
              value={newTweetText}
              onChange={handleTextChange}

            />
            {imagePreview && <PreviewImage src={imagePreview} alt="Preview" />}
            <FileButon>
                <FileInputWrapper>
                    <ImageIcon />
                    <FileInput
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <GifIcon/>
                    <StatsIcon/>
                    <SmileIcon/>
                    <ScheduleIcon/>
                </FileInputWrapper>
                <TweetButton backgroundColor='orange-light' onClick={() => handleSubmit()}>{titleBtn}</TweetButton>
            </FileButon>
          </NewTweets>
        </Container>
      );

};

export default NewTweet;