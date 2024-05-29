import React from 'react';
import { Link } from "react-router-dom";

import { 
  Container,
  HomeIcon,
  ProfileIcon,
  BellIcon,
  EmailIcon,
 } from './styles';

const BottomMenu= () => {
  return (
        <Container>
          <Link to='/feed'><HomeIcon /></Link>
          <Link to='/profile'><ProfileIcon /></Link>
          <BellIcon />
          <EmailIcon />
        </Container>
  );
}

export default BottomMenu;