import React, { useState, useRef } from 'react';
import { mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';
import Modal from '../Modal';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    LinkIcon,
    BollonIcon,
    CalenderIcon,
    Followage,
    EditButton,
    ModalContainer,
    Form,
    Input,
    TextArea,
    InputFile,
    FTCapa,
    FTProfile,
    ImagePreviewCapa,
    ImagePreviewProfile,
    SubmitButton,
} from './styles';
import UserTweet from '../UserTweet/Index';

const ProfilePage = () => {
    const { id } = useDataContext();

    const [isOpen, setIsOpen] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState<string | ArrayBuffer | null>(null);
    const [profilePhoto, setProfilePhoto] = useState<string | ArrayBuffer | null>(null);
    const coverPhotoInputRef = useRef<HTMLInputElement>(null);
    const profilePhotoInputRef = useRef<HTMLInputElement>(null);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const teste = () => {
        console.log('Teste: ', coverPhoto?.toString());
    };

    const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setCoverPhoto(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log('Profile: ', file);
        
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setProfilePhoto(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const openCoverPhotoInput = () => {
        if (coverPhotoInputRef.current) {
          coverPhotoInputRef.current.click();
        }
      };
    
    const openProfilePhotoInput = () => {
        if (profilePhotoInputRef.current) {
          profilePhotoInputRef.current.click();
        }
    };


  return (
    <Container>
        {mockUsers.map((item) =>
            item.id === id &&
            <>
                <Banner>
                    <img src={item.coverImage} alt="imagem da Capa do perfil" />
                    <Avatar>
                        <img src={item.profileImage} alt={`imagem do perfil de ${item.name}`} />
                    </Avatar>
                </Banner>

                <ProfileData>
                    <EditButton outlined onClick={toggleModal}>Editar</EditButton>

                    <h1>{item.name}</h1>
                    <h2>{item.nickname}</h2>

                    <p>
                        {item.bio} 
                    </p>
                    <ul>
                        <li>
                            <LocationIcon />
                            {item.city}
                        </li>
                        <li>
                            <LinkIcon />
                            <a href={`${item.site}`}>{item.site}</a>
                        </li>
                        <li>
                            <BollonIcon />
                            {item.dateofbirth}
                        </li>
                        <li>
                            <CalenderIcon />
                            Joined {item.joined}
                        </li>
                    </ul>

                    <Followage>
                        <span><strong>{item.Following}</strong> Following</span>
                        <span><strong>{item.Followers}</strong> Followers</span>
                    </Followage>
                </ProfileData>
            </>
        )}
        <UserTweet />
        <ModalContainer>
            <Modal isOpen={isOpen} onClose={toggleModal}>
            <h2>Editar Perfil</h2>
            <Form>
                <FTCapa onClick={openCoverPhotoInput}>
                <InputFile type="file" accept="image/*" id="coverPhoto" name="coverPhoto" ref={coverPhotoInputRef} onChange={handleCoverPhotoChange} />
                {coverPhoto && <ImagePreviewCapa src={coverPhoto.toString()} alt="Preview da Foto da Capa" />}
                </FTCapa>
                <FTProfile onClick={openProfilePhotoInput}>
                <InputFile type="file" accept="image/*" id="profilePhoto" name="profilePhoto" ref={profilePhotoInputRef} onChange={handleProfilePhotoChange} />
                {profilePhoto && <ImagePreviewProfile src={profilePhoto.toString()} alt="Preview da Foto do Perfil" />}
                </FTProfile>
                <Input type="text" id="name" name="name" placeholder='Nome:' />
                <TextArea id="bio" name="bio" placeholder='Bio:'></TextArea>
                <Input type="text" id="city" name="city" placeholder='Cidade:'/>
                <Input type="text" id="site" name="site" placeholder='Site:'/>
                <p onClick={teste}>Clique</p>
                <SubmitButton>Salvar</SubmitButton>
            </Form>
            </Modal>
        </ModalContainer>
    </Container>
  );
}

export default ProfilePage;