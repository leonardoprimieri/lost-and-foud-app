import React, { useState } from 'react';
import 'react-notifications-component/dist/theme.css';

import firebase from '../../services/FirebaseConnection';

import { useHistory } from 'react-router-dom';

import signin from '../../assets/signin.svg';
import wallpaper from '../../assets/wallpaperSignIn.jpg';

import { Container, Form, InputLabel, FormContent } from './styles';
import Header from '../../components/Header';
import ShapeDivider from '../../components/ShapeDivider';
import {
  SuccessNotification,
  ErrorNotification,
} from '../../helpers/ToastNotifications';

const SignIn = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      SuccessNotification('Success', 'You are logged in!');
      localStorage.setItem('email', email);
      return history.push('/lost-items');
    } catch (error) {
      ErrorNotification('Ops!', String(error));
    }
  }

  return (
    <Container background={wallpaper}>
      <Header />
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <h4>Insira seus dados e faça login na sua conta</h4>
          <InputLabel>
            <label htmlFor="email">Email</label>
            <input
              type="email"
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
            <button type="submit">Entrar</button>
          </InputLabel>
        </FormContent>
        <img src={signin} alt="two people doing login" />
      </Form>
      <ShapeDivider />
    </Container>
  );
};

export default SignIn;
