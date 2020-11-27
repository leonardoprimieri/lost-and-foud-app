import React, { useLayoutEffect, useState } from 'react';
import 'react-notifications-component/dist/theme.css';

import Firebase from '../../services/FirebaseConnection';

import { useHistory } from 'react-router-dom';

import signin from '../../assets/signin.svg';
import wallpaper from '../../assets/wallpaperSignIn.jpg';

import { Container, Form, InputLabel, FormContent } from './styles';
import {
  SuccessNotification,
  ErrorNotification,
} from '../../helpers/ToastNotifications';
import SideBar from '../../components/SideBar';

const SignIn = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [rememberMe, setRememberMe] = useState('');

  useLayoutEffect(() => {
    let emailStorage = localStorage.getItem('email');
    let passwordStorage = localStorage.getItem('password');
    if (emailStorage && passwordStorage) {
      setEmail(emailStorage);
      setPassword(passwordStorage);
      setRememberMe(true);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          localStorage.setItem('uuid', response.user.uid);
          if (rememberMe === true) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
          } else {
            localStorage.removeItem('email', email);
            localStorage.removeItem('password', password);
          }
        });
      SuccessNotification('Success', 'You are logged in!');
      return history.push('/lost-items');
    } catch (error) {
      ErrorNotification('Ops!', String(error));
    }
  }

  return (
    <Container background={wallpaper}>
      <SideBar />

      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormContent>
          <h4>Insira seus dados e faça login na sua conta</h4>
          <InputLabel>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputLabel>
          <InputLabel>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="checkbox">
              <label htmlFor="remember">Lembrar-me</label>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                value={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
            </div>
            <button type="submit">Entrar</button>
          </InputLabel>
        </FormContent>
        <img src={signin} alt="two people doing login" />
      </Form>
    </Container>
  );
};

export default SignIn;
