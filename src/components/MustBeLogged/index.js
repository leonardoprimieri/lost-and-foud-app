import React from 'react';
import { Link } from 'react-router-dom';

import Error401 from '../../assets/unauthorized.svg';

import { Container, Item } from './styles';

const MustBeLogged = ({ children }) => {
  return (
    <Container>
      <Item>
        <h2>{children}</h2>
        <img src={Error401} alt="" />
        <Link to="/sign-in">Fazer Login</Link>
      </Item>
    </Container>
  );
};

export default MustBeLogged;
