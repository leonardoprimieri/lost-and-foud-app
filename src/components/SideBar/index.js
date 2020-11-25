import React, { useEffect, useState } from 'react';
import {
  FiArrowLeft,
  FiLogIn,
  FiMap,
  FiMessageCircle,
  FiPlus,
  FiPower,
  FiUser,
  FiUserPlus,
} from 'react-icons/fi';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { logOut } from '../../helpers/AuthHandler';

import Firebase from '../../services/FirebaseConnection';

import { Container, Content } from './styles';

const SideBar = () => {
  const history = useHistory();

  const [user, setUser] = useState(null);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        setUser(user.uid);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <span>FindIt</span>
          </Link>
        </div>
        <div className="links">
          {user ? (
            <>
              <button onClick={() => logOut()} className="button-link">
                <FiPower size={24} color="var(--light-color)" />
              </button>
              <NavLink
                activeClassName="active-link"
                to="/admin"
                className="button-link"
              >
                <FiUser size={24} color="var(--light-color)" />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="sign-in"
                className="button-link"
                activeClassName="active-link"
              >
                <FiLogIn size={24} color="var(--light-color)" />
              </NavLink>
              <NavLink
                to="sign-up"
                className="button-link"
                activeClassName="active-link"
              >
                <FiUserPlus size={24} color="var(--light-color)" />
              </NavLink>
            </>
          )}

          <NavLink
            to="/comments"
            className="button-link"
            activeClassName="active-link"
          >
            <FiMessageCircle size={24} color="var(--light-color)" />
          </NavLink>
          <NavLink
            to="/leave-comment"
            className="button-link"
            activeClassName="active-link"
          >
            <FiPlus size={24} color="var(--light-color)" />
          </NavLink>
          <NavLink
            to="/lost-items"
            className="button-link"
            activeClassName="active-link"
          >
            <FiMap size={24} color="var(--light-color)" />
          </NavLink>
          <button onClick={() => history.goBack()}>
            <FiArrowLeft size={24} color="var(--light-color)" />
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default SideBar;
