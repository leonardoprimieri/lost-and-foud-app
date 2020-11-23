import React from 'react';
import { FiArrowLeft, FiLogIn, FiPower, FiUserPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { isLogged, logOut } from '../../helpers/AuthHandler';

import { Container, Content } from './styles';

const SideBar = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <span>FindIt</span>
          </Link>
        </div>
        <div className="links">
          {isLogged() ? (
            <>
              <button onClick={() => logOut()} className="button-link">
                <FiPower size={24} color="var(--light-color)" />
              </button>
            </>
          ) : (
            <>
              <Link to="sign-in" className="button-link">
                <FiLogIn size={24} color="var(--light-color)" />
              </Link>
              <Link to="sign-up" className="button-link">
                <FiUserPlus size={24} color="var(--light-color)" />
              </Link>
            </>
          )}

          <button onClick={() => history.goBack()}>
            <FiArrowLeft size={24} color="var(--light-color)" />
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default SideBar;
