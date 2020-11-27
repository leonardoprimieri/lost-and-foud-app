import React, { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import MustBeLogged from '../../components/MustBeLogged';
import SideBar from '../../components/SideBar';

import Firebase, { storage } from '../../services/FirebaseConnection';

import { Container, Content } from './styles';

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
          <table>
            <caption>Dados cadastrados no sistema</caption>
            <thead>
              <tr>
                <th scope="col">Proprietário</th>
                <th scope="col">Descrição</th>
                <th scope="col">Whatsapp</th>
                <th scope="col">Cidade</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(lostItems).map((item, key) => (
                <tr key={key}>
                  <td data-label="Proprietário">{lostItems[item].owner}</td>
                  <td data-label="Descrição">{lostItems[item].description}</td>
                  <td data-label="Whatsapp">{lostItems[item].whatsapp}</td>
                  <td data-label="Cidade">{lostItems[item].city}</td>
                  <td data-label="Ação">
                    <button onClick={() => deleteItem(item)}>
                      <FiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <MustBeLogged>
            Ops!, você precisa estar logado para ver isso!
          </MustBeLogged>
        )}
      </Content>
    </Container>
  );
};

export default Admin;
