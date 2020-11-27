import React, { useEffect, useState } from 'react';
import Firebase from '../../services/FirebaseConnection';

import { FiPhone } from 'react-icons/fi';
import { Container, Content, Actions } from './styles';

const LostItemComponent = ({ data }) => {
  const [itemImage, setItemImage] = useState();

  useEffect(() => {
    async function getItemImage() {
      var storage = Firebase.storage();
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
      <Content>
        <img src={itemImage} alt="lost item" />
        <h1>{data.description}</h1>

        <h2>Proprietário</h2>
        <h3>
          <i>{data.owner}</i>
        </h3>
        <h2>Reside em</h2>
        <h3>
          <i>{data.city}</i>
        </h3>
        <Actions>
          <a
            href={`https://api.whatsapp.com/send?phone=${data.whatsapp}&text=Olá, acho que encontrei o que você perdeu!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiPhone size={24} />
            <span>Entrar em contato</span>
          </a>
        </Actions>
      </Content>
    </Container>
  );
};

export default LostItemComponent;
