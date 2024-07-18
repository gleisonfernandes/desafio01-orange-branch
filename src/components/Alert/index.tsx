import React, { useState } from 'react';
import { AlertComponentProps } from "./types";
import { AlertContainer, CloseButton } from './styles';

const AlertComponent = ({severity, title, onClose}: AlertComponentProps) => {
    return(
        <>
         <AlertContainer severity={severity} role="alert">
         {title}
         <CloseButton type="button" className="close" aria-label="Close" onClick={onClose}>
           <span aria-hidden="true">&times;</span>
         </CloseButton>
       </AlertContainer>
      </>
    );
}
export default AlertComponent;
/*const CustomAlert: React.FC<CustomAlertProps> = ({ severity, message }) => {
    const [open, setOpen] = useState(true);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        {open && (
          <div className={`alert alert-${severity}`} role="alert">
            {message}
            <button type="button" className="close" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
      </>
    );
  };
  
  export default CustomAlert;*/