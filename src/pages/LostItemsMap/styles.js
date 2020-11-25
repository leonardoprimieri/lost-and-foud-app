import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  .map--popup .leaflet-popup-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map--popup .leaflet-popup-tip-container {
    display: none;
  }

  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    border: 3px solid var(--dark-purple);
    padding: 0;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  }

  .add-lostItem {
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 9999;
    button {
      cursor: pointer;
      background: var(--dark-purple);
      border: 0;
      font-weight: bold;
      font-size: 18px;
      padding: 22px;
      border-radius: 20px;
      display: flex;
      justify-items: center;
      align-items: center;
      color: #fff;
      svg {
        margin-right: 12px;
      }
      @media (max-width: 480px) {
        padding: 12px;
        font-size: 12px;
      }
    }
  }
`;
