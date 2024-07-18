import React, { useState, useRef, useEffect } from 'react';
import FotoProfile from "../../assets/FotoPerfil.png";
import CoverProfile from "../../assets/cover.png";
import { mockUsers } from '../../mockData';
import { useDataContext } from '../../Context';
import { useAuth } from "../../providers/AuthProvider/useAuth";
import Modal from '../Modal';
import { UpdateUser } from '../../service/user';
import { UpdateUserProps } from '../../service/user/types';

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
import { Request } from '../../service/tweets/types';

const ProfilePage = () => {
    const { user } = useDataContext();
    const auth = useAuth();

    console.log(user);
    

    const [isOpen, setIsOpen] = useState(false);
    const [isFile, setIsFile] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [coverImage, setCoverImage] = useState<string | null>(null); 
    const [profileImage, setProfileImage] = useState<string | null>(null); 
    const coverPhotoInputRef = useRef<HTMLInputElement>(null);
    const profilePhotoInputRef = useRef<HTMLInputElement>(null);
    const [formValues, setFormValues] = useState({
        name: user?.name || '', 
        bio: user?.bio || '', 
        city: user?.city || '', 
        site: user?.site || '', 
    });

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCoverImage(reader.result as string);
            };
            reader.readAsDataURL(file);
            setIsFile(true);
        }
    };

    const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
        console.log(event.target.files);
        
        const newFile = event.target.files?.[1];
        if (newFile) {
            const reader = new FileReader();
            reader.onload = () => {
                console.log("entrou no 2");
                setProfileImage(reader.result as string);
                console.log(profileImage);
                
            };
            reader.readAsDataURL(newFile);
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!auth?.token) return;
        if (!user?.id) return;


        const formData: UpdateUserProps = {
            ...formValues,
            coverImage, 
            profileImage, 
        };

        try {
            const response = await UpdateUser(formData, user?.id, auth?.token);
            console.log('Usuário atualizado:', response.data);


            setIsOpen(false); 
            setIsEdited(true);

        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
        }

        console.log('Formulário submetido:', formData);
    };

    useEffect(() => {
        setProfileImage(user?.profileImage ?? FotoProfile);
        setCoverImage(user?.coverImage ?? CoverProfile);
    },[user]);

    return (
        <Container>
            <Banner>
                {user?.coverImage ?
                <img src={user?.coverImage} alt="imagem da Capa do perfil" /> : <img src={CoverProfile} alt="imagem da Capa do perfil" />
                }
                <Avatar>
                    {user?.profileImage ?
                        <img src={user?.profileImage} alt={`imagem do perfil de ${user?.name}`} /> : <img src={FotoProfile} alt={`imagem do perfil de ${user?.name}`} />
                    }
                </Avatar>
            </Banner>

            <ProfileData>
                <EditButton outlined onClick={toggleModal}>Editar</EditButton>

                <h1>{user?.name}</h1>
                <h2>{user?.nickname}</h2>

                <p>
                    {user?.bio}
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        {user?.city}
                    </li>
                    <li>
                        <LinkIcon />
                        <a href={`${user?.site}`}>{user?.site}</a>
                    </li>
                    <li>
                        <BollonIcon />
                        {user?.dateofbirth}
                    </li>
                    <li>
                        <CalenderIcon />
                        Joined {user?.createdAt}
                    </li>
                </ul>

                <Followage>
                    <span><strong>{user?.Following}</strong> Following</span>
                    <span><strong>{user?.Followers}</strong> Followers</span>
                </Followage>
            </ProfileData>
            <UserTweet />
            <ModalContainer>
                <Modal isOpen={isOpen} onClose={toggleModal}>
                    <h2>Editar Perfil</h2>
                    <Form onSubmit={handleSubmit}>
                        <FTCapa onClick={openCoverPhotoInput}>
                            <InputFile type="file" accept="image/*" id="coverPhoto" name="coverPhoto" ref={coverPhotoInputRef} onChange={handleCoverPhotoChange} />
                            <ImagePreviewCapa src={coverImage ?? ''} alt="Preview da Foto da Capa" />
                        </FTCapa>
                        <FTProfile onClick={openProfilePhotoInput}>
                            <InputFile type="file" accept="image/*" id="profilePhoto" name="profilePhoto" ref={profilePhotoInputRef} onChange={handleProfilePhotoChange} />
                            <ImagePreviewProfile src={profileImage ?? ''} alt="Preview da Foto do Perfil" />
                        </FTProfile>
                        <Input type="text" id="name" name="name" placeholder='Nome:' value={formValues.name} onChange={handleInputChange} />
                        <TextArea id="bio" name="bio" placeholder='Bio:' value={formValues.bio} onChange={handleInputChange} />
                        <Input type="text" id="city" name="city" placeholder='Cidade:' value={formValues.city} onChange={handleInputChange} />
                        <Input type="text" id="site" name="site" placeholder='Site:' value={formValues.site} onChange={handleInputChange} />
                        <SubmitButton>Salvar</SubmitButton>
                    </Form>
                </Modal>
            </ModalContainer>
        </Container>
    );
};

export default ProfilePage;
