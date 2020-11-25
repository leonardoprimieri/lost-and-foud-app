import React from 'react';
import loading from '../../assets/loading.gif';

import { Container } from './styles';

const Loading = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
      <img src={loading} alt="loading" />
    </Container>
  );
};

export default Loading;
