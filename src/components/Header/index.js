import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Container, Content } from './styles';

const Header = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <button onClick={() => history.goBack()}>
          <FiArrowLeft size={32} color="var(--dark-purple)" />
        </button>
        <Link to="/">
          <h1>Find It</h1>
        </Link>
      </Content>
    </Container>
  );
};

export default Header;
