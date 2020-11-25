import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Firebase, { storage } from '../../services/FirebaseConnection';

import {
  ErrorNotification,
  SuccessNotification,
} from '../../helpers/ToastNotifications';

import wallpaper from '../../assets/wallpaperNewCrime.png';

import mapMarker from '../../assets/map-pin.png';

import { Form, FormContent, InputLabel } from '../SignUp/styles';
import { Container, MapContent } from './styles';

import { FiPlus } from 'react-icons/fi';
import SideBar from '../../components/SideBar';
import { useHistory } from 'react-router-dom';
import MustBeLogged from '../../components/MustBeLogged';

const NewLostItem = () => {
  const [owner, setOwner] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [progress, setProgress] = useState('');

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

  function handleImageUpload(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      owner,
      description,
      image: image.name,
      latitude: Number(position.latitude),
      longitude: Number(position.longitude),
      whatsapp,
      city,
      id: uuidv4(),
    };
    try {
      await Firebase.database().ref(`/items`).push(data);

      const uploadData = storage.ref(`images/${image.name}`).put(image);
      uploadData.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage.ref('images').child(image.name).getDownloadURL();
        }
      );

      SuccessNotification('Done!', 'Your item was successfully registered.');

      return history.push('/lost-items');
    } catch (error) {
      return ErrorNotification(
        'Error',
        'Something went wrong, please try again.'
      );
    }
  }

  function handleMapClick(event) {
    const { lat, lng } = event.latlng;

    setPosition({ latitude: lat, longitude: lng });
  }

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 75],
    iconAnchor: [30, 75],
    popupAnchor: [170, 2],
  });

  return (
    <Container background={wallpaper}>
      <SideBar />
      {user ? (
        <Form onSubmit={handleSubmit} className="responsive">
          <FormContent>
            <h4>Cadastrar item perdido</h4>
            <InputLabel>
              <label htmlFor="owner">Seu nome</label>
              <input
                type="text"
                name="owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              />
            </InputLabel>
            <InputLabel>
              <label htmlFor="password">
                Características do objeto perdido
              </label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputLabel>
            <InputLabel>
              <label htmlFor="city">Sua cidade</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </InputLabel>
            <InputLabel>
              <label htmlFor="whatsapp">Seu Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </InputLabel>
            <InputLabel>
              <label htmlFor="image" className="image-upload">
                <div className="form--send__image">
                  <FiPlus size={32} color="var(--dark-purple)" />
                  Inserir foto
                </div>
                {progress > 0 && <progress value={progress} max="100" />}
              </label>
              <input
                type="file"
                multiple
                id="image"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
            </InputLabel>
          </FormContent>
          <MapContent>
            <h3>Clique no mapa para inserir onde o item foi perdido</h3>
            <Map
              center={[-27.2092052, -49.6401092]}
              style={{
                width: '80%',
                height: 400,
                borderRadius: 20,
                alignSelf: 'center',
                margin: 20,
              }}
              zoom={8}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>
            <button type="submit">Enviar dados</button>
          </MapContent>
        </Form>
      ) : (
        <MustBeLogged>Para cadastrar um item, faça login</MustBeLogged>
      )}
    </Container>
  );
};

export default NewLostItem;
