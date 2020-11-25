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
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 725px) {
    margin-top: 200px;
  }
`;

export const Item = styled.div`
  width: 100%;
  button {
    padding: 22px;
    background: var(--dark-purple);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    color: var(--light-color);
    font-size: 16px;
    cursor: pointer;
    width: 100%;
  }
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  background: #36393f;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 32px;
  margin: 12px;
  color: var(--light-color);
`;
