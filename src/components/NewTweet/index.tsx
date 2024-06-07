import React, { useState } from 'react';
import { mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';
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

interface FormProps {
  description?: string;
  image?: string;
  titleBtn: string;
}

const NewTweet = ({description, image, titleBtn}: FormProps) => {
    const { id } = useDataContext();
    const [newTweetText, setNewTweetText] = useState<string>('');
    const [newTweetImage, setNewTweetImage] = useState<string>('');
    const [imagePreview, setImagePreview] = useState<string>('');

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

    return (
        <Container>
          <NewTweets>
          {mockUsers.map((item) =>
            item.id === id &&
             <>
                <Avatar>
                    <img src={item.profileImage} alt={`imagem do perfil de ${item.name}`} />
                </Avatar>
             </>
            )}
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
                <TweetButton backgroundColor='orange-light' onClick={() =>{}}>{titleBtn}</TweetButton>
            </FileButon>
          </NewTweets>
        </Container>
      );

};

export default NewTweet;