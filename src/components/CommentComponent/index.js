import React from 'react';

import { Container, HeaderContent, Description } from './styles';

const CommentComponent = ({ data }) => {
  return (
    <Container>
      <HeaderContent>
        <h1>{data.name}</h1>
      </HeaderContent>
      <Description>
        <p>{data.subjectMatter}</p>
        <p>{data.message}</p>
      </Description>
    </Container>
  );
};

export default CommentComponent;
