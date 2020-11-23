import React, { useState } from 'react';
import 'react-notifications-component/dist/theme.css';

import firebase from '../../services/FirebaseConnection';

import { useHistory } from 'react-router-dom';

import signup from '../../assets/signup.svg';
import wallpaper from '../../assets/wallpaperSignUp.jpg';

import { Container, Form, InputLabel, FormContent } from './styles';
import Header from '../../components/Header';
import ShapeDivider from '../../components/ShapeDivider';
import {
  ErrorNotification,
  SuccessNotification,
} from '../../helpers/ToastNotifications';

const SignUp = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      SuccessNotification('Success!', 'Your account was successfully created!');
      return history.push('/sign-in');
    } catch (error) {
      ErrorNotification('Ops!', String(error));
    }
  }

  return (
    <Container background={wallpaper}>
      <Header />
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <h4>Cadastre-se para postar objetos perdidos</h4>
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
            <button type="submit">Cadastrar</button>
          </InputLabel>
        </FormContent>
        <img src={signup} alt="two people doing login" />
      </Form>
      <ShapeDivider />
    </Container>
  );
};

export default SignUp;
