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
    font-weight: bold;
    svg {
      margin-right: 12px;
    }
  }
`;

export const Actions = styled.div`
  .google-maps-button {
    background: #6ab04c;
  }
`;
