import React, { useEffect, useState } from 'react';
import firebase from '../../services/FirebaseConnection';
import { Container } from './styles';

const LostItemComponent = ({ data }) => {
  const [itemImage, setItemImage] = useState();
  useEffect(() => {
    async function getItemImage() {
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var tangRef = storageRef.child(`images/${data.image}`);
      tangRef
        .getDownloadURL()
        .then(function (url) {
          setItemImage(url);
        })
        .catch(function (error) {
          return;
        });
    }

    getItemImage();
  }, [data]);
  return (
    <Container>
      <h1>{data.owner}</h1>
      <p>{data.whatsapp}</p>
      <p>{data.image}</p>
      <img src={itemImage} alt="" />
    </Container>
  );
};

export default LostItemComponent;
