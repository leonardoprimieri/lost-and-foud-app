import React from 'react';

import { Container } from './styles';

const MustBeLogged = ({ children }) => {
  return (
    <Container>
      <h2>{children}</h2>
    </Container>
  );
};

export default MustBeLogged;
