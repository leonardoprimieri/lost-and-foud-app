import styled from 'styled-components';

export const Container = styled.div`
  background: url(${(props) => props.background});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 725px) {
    margin-top: 200px;
    grid-template-columns: 1fr;
  }
`;
