import React, { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import MustBeLogged from '../../components/MustBeLogged';
import SideBar from '../../components/SideBar';

import Firebase, { storage } from '../../services/FirebaseConnection';

import { Container, Content, Item } from './styles';

const Admin = () => {
  const [lostItems, setLostItems] = useState({});

  useEffect(() => {
    async function getLostItems() {
      Firebase.database()
        .ref('items')
        .on('value', (snapshot) => {
          if (snapshot.val() !== null) {
            setLostItems({ ...snapshot.val() });
          }
        });
    }
    getLostItems();
  }, []);

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

  // Create a reference to the file to delete

  function deleteItem(item) {
    console.log(item);
    Firebase.database().ref(`/items/${item}`).remove();

    var desertRef = storage.ref(`images/${item.image}`);

    // Delete the file
    desertRef
      .delete()
      .then(function () {
        // File deleted successfully
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
      });
  }
  return (
    <Container>
      <SideBar />
      <Content>
        {user ? (
          Object.keys(lostItems).map((item, key) => (
            <Item key={key}>
              <h3>Nome: {lostItems[item].owner}</h3>
              <h3>{lostItems[item].description}</h3>
              <h3>{lostItems[item].whatsapp}</h3>
              <h3>{lostItems[item].city}</h3>
              <button onClick={() => deleteItem(item)}>
                <FiTrash />
              </button>
            </Item>
          ))
        ) : (
          <MustBeLogged>
            Para acessar o administrativo, você precisa estar logado
          </MustBeLogged>
        )}
      </Content>
    </Container>
  );
};

export default Admin;
