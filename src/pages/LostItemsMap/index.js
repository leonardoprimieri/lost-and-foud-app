import React, { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { FiAlertCircle } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';
import { Container, Content } from './styles';

import mapMarker from '../../assets/map-pin.png';

import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';

import firebase from '../../services/FirebaseConnection';
import LostItemComponent from '../../components/LostItemComponent';

const LostItemsMap = () => {
  const [lostItems, setLostItems] = useState({});
  const [userCoordinates, setUserCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [54, 54],
    iconAnchor: [30, 75],
    popupAnchor: [170, -19],
  });

  useEffect(() => {
    function getUserLocation() {
      if (!('geolocation' in navigator)) {
        alert('Navegador não tem suporte API Geolocation');
      }
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserCoordinates({ latitude: latitude, longitude: longitude });
      });
    }
    getUserLocation();
  }, []);

  useEffect(() => {
    async function getLostItems() {
      firebase
        .database()
        .ref('items')
        .on('value', (snapshot) => {
          if (snapshot.val() !== null) {
            setLostItems({ ...snapshot.val() });
          }
        });
    }
    getLostItems();
  }, []);

  return (
    <Container>
      <SideBar />
      <Content>
        <Map
          center={[userCoordinates.latitude, userCoordinates.longitude]}
          style={{ width: '100vw', height: '100vh' }}
          infinite
          zoom={3}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {Object.keys(lostItems).map((item, key) => (
            <Marker
              icon={mapIcon}
              position={[lostItems[item].latitude, lostItems[item].longitude]}
              key={key}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map--popup"
              >
                <LostItemComponent data={lostItems[item]} />
              </Popup>
            </Marker>
          ))}
        </Map>
        <Link to="/lost-items/new" className="add-lostItem">
          <button>
            <FiAlertCircle size={24} color="#fff" strokeWidth={3} />
            Perdeu alguma coisa?
          </button>
        </Link>
      </Content>
    </Container>
  );
};

export default LostItemsMap;
