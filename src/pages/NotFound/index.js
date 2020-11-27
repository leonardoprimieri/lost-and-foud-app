import React from 'react';

import imageNotFound from '../../assets/404.svg';
import SideBar from '../../components/SideBar';

import { Container, Content } from './styles';

const NotFound = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <h1>Ops! Parece que você se perdeu...</h1>
        <img src={imageNotFound} alt="" />
      </Content>
    </Container>
  );
};

export default NotFound;
