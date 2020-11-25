import React, { useEffect, useState } from 'react';
import CommentComponent from '../../components/CommentComponent';
import SideBar from '../../components/SideBar';

import firebase from '../../services/FirebaseConnection';

import wallpaper from '../../assets/commentWallpaper.jpg';

import { Container, Content } from './styles';
import Loading from '../../components/Loading';

const Comments = () => {
  const [comments, setComments] = useState('');

  useEffect(() => {
    async function getComments() {
      firebase
        .database()
        .ref('comments')
        .on('value', (snapshot) => {
          if (snapshot.val() !== null) {
            setComments({ ...snapshot.val() });
          }
        });
    }
    getComments();
  }, []);
  return (
    <Container background={wallpaper}>
      <SideBar />
      <Content>
        {comments !== '' ? (
          Object.keys(comments).map((comment, key) => (
            <CommentComponent key={key} data={comments[comment]} />
          ))
        ) : (
          <Loading>Carregando comentários</Loading>
        )}
      </Content>
    </Container>
  );
};

export default Comments;
