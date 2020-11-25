import styled from 'styled-components';

export const Container = styled.div`
  background: url(${(props) => props.background});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  .form--send__image {
    padding: 32px;
    border-radius: 6px;
    margin: 0;
    background: #f5f8fa;
    color: var(--dark-purple);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .image-upload {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 22px;
  }
  @media (max-width: 480px) {
    margin-top: 200px;
  }

  .responsive {
    @media (max-width: 680px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const MapContent = styled.section`
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--light-color);
    width: 70%;
    align-self: center;
  }

  button {
    padding: 12px 18px;
    border-radius: 6px;
    width: 80%;
    margin: 0 auto;
    cursor: pointer;
    background: #905fa1;
    color: var(--light-color);
    font-weight: bold;
    font-size: 16px;
  }
`;
