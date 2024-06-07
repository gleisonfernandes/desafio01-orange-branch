import React from 'react';

import { 
    ModalWrapper,
    ModalContent,
    CloseButton,
   } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal  = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton outlined onClick={onClose}>x</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;