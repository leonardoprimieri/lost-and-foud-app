import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  display: flex;
  align-items: center;
  width: 100%;

  h2 {
    color: #282828;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background: var(--light-color);
  padding: 32px;
  border-radius: 6px;
`;
