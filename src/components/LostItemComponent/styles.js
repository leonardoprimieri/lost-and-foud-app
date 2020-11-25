import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 6px 6px 0 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: start;
  flex-direction: column;

  img,
  h1,
  h2,
  span,
  a {
    margin: 12px 0px;
  }

  a {
    padding: 22px;
    background: var(--dark-purple);
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: baseline;
    border-radius: 6px;
    color: var(--light-color);
    font-size: 16px;
    cursor: pointer;
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
