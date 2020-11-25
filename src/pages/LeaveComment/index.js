import React, { useState } from 'react';

import firebase from '../../services/FirebaseConnection';

import wallpaper from '../../assets/wallpaperSignIn.jpg';
import comment from '../../assets/comment.svg';

import { Container, Form, FormContent, InputLabel } from '../SignUp/styles';
import {
  ErrorNotification,
  SuccessNotification,
} from '../../helpers/ToastNotifications';
import SideBar from '../../components/SideBar';
import ShapeDivider from '../../components/ShapeDivider';
import { useHistory } from 'react-router-dom';

const LeaveComment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subjectMatter, setSubjectMatter] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      subjectMatter,
      message,
    };
    try {
      await firebase.database().ref(`/comments`).push(data);

      SuccessNotification('Done!', 'Your comment was successfully sent.');

      return history.push('/comments');
    } catch (error) {
      return ErrorNotification(
        'Error',
        'Something went wrong, please try again.'
      );
    }
  }

  return (
    <Container background={wallpaper}>
      <SideBar />
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <h4>Deixar um comentário</h4>
          <InputLabel>
            <label htmlFor="name">Seu nome</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputLabel>
          <InputLabel>
            <label htmlFor="email">Seu email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputLabel>
          <InputLabel>
            <label htmlFor="subjectMatter">Assunto</label>
            <input
              type="text"
              name="subjectMatter"
              value={subjectMatter}
              onChange={(e) => setSubjectMatter(e.target.value)}
            />
          </InputLabel>
          <InputLabel>
            <label htmlFor="message">Mensagem</label>
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Enviar comentário</button>
          </InputLabel>
        </FormContent>
        <img src={comment} alt="Posting a commnet" />
      </Form>
      <ShapeDivider />
    </Container>
  );
};

export default LeaveComment;
