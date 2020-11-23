import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  background: transparent;
  height: 80px;
  width: 100%;

  display: flex;

  button {
    background: transparent;
    cursor: pointer;
  }

  h1 {
    color: var(--dark-purple);
  }
`;

export const Content = styled.nav`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  width: 80%;
`;
