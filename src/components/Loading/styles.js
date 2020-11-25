import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  color: var(--light-color);
  img {
    width: 50px;
    margin: 12px;
  }
`;
