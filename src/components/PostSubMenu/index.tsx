import React, { useEffect, useState } from 'react';
import NewTweet from '../NewTweet';
import Modal from '../Modal';
import Button from '../Button';
import { DeleteTweet } from '../../service/tweets';
import { useAuth } from '../../providers/AuthProvider/useAuth';
import { AxiosError } from 'axios';
import AlertComponent from '../Alert';
import {  
  SubMenu,
  SubMenuOptions,
  SubMenuOption,
  ModalContainer, 
  ButtonsGroup, 
} from './styles';

interface PostSubMenuProps {
  postId: number;
  descriptionTweet?: string;
  imageTweet?: string;
  isOpenSubMenu: boolean;
  toggleSubMenu: () => void;
}

const PostSubMenu = ({ postId, descriptionTweet, imageTweet, isOpenSubMenu, toggleSubMenu }: PostSubMenuProps) => {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);
  const [message, setMessage] = useState<any>();

  const handleEdit = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    setIsOpenDelete(!isOpenDelete);

  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleModalDelete = () => {

    console.log("Chegou antes");
    setIsOpenDelete(!isOpenDelete);
    console.log("Chegou depois");
  };
  const deleteTweet = async ( ) => {
    console.log("Delete tweet numero: ", postId);
    try{
      if(!auth?.token) return;
        const response = await DeleteTweet({token: auth?.token, id: postId});
        if(response.status === 204){
          setMessage("Tweet Excluido.");
          setHasSuccess(true);
          setTimeout(() => {
            setHasSuccess(false);
            window.location.reload();
         }, 1000);
        }
      } catch (error) {
        if (error instanceof AxiosError) {        
          setMessage('Ocorreu um erro ao deletar o tweet.');
          setHasError(true);
          setTimeout(() => {
            setHasError(false);
         }, 2000);
        } else {
            setMessage('Ocorreu um erro ao deletar o tweet.');
            setHasError(true);
            setTimeout(() => {
              setHasError(false);
          }, 2000);
        }
      }
  }

  const handleCloseAlert = () => {
    setHasError(false);
    setHasSuccess(false);
  };

  if(isOpen){
    return (
      <ModalContainer>
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <h3>Editar Tweet</h3>
          <NewTweet id={postId} description={descriptionTweet ?? ''} image={imageTweet ?? ''} titleBtn='Salvar'/>
        </Modal>
      </ModalContainer>
    );
    
  }else if(isOpenDelete){
    return (
      <ModalContainer>
        <Modal isOpen={isOpenDelete} onClose={() => toggleModalDelete()}>
          <h3>Tem certeza que deseja Excluir</h3>
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
          <ButtonsGroup>
            <Button outlined onClick={() => toggleModalDelete()}>Cancelar</Button>
            <Button backgroundColor='like' onClick={() => deleteTweet()}>Excluir</Button>
          </ButtonsGroup>
        </Modal>
      </ModalContainer>
    );
  }else{
    return (
      <ModalContainer>
      <SubMenu isOpenSubMenu={isOpenSubMenu}>
        <SubMenuOptions>
          <SubMenuOption onClick={handleEdit}>Editar</SubMenuOption>
          <SubMenuOption onClick={handleDelete}>Excluir</SubMenuOption>
        </SubMenuOptions>
      </SubMenu>
      </ModalContainer>
    );
  }
};

export default PostSubMenu;
