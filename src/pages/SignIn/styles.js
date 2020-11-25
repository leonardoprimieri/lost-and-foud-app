import styled from 'styled-components';

export const Container = styled.div`
  background: url(${(props) => props.background});
  height: 100vh;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  h4 {
    color: var(--light-color);
    margin: 12px;
  }

  background: #36393f;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 32px;
  margin: 12px;

  @media (max-width: 680px) {
    display: flex;
  }

  img {
    @media (max-width: 680px) {
      display: none;
    }
  }
`;

export const InputLabel = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  flex-direction: column;

  width: 100%;

  input {
    margin: 12px;
    padding: 12px 18px;
    border-radius: 6px;
    width: 100%;
  }
  button {
    margin: 12px;
    padding: 12px 18px;
    border-radius: 6px;
    width: 100%;
    cursor: pointer;
    background: #905fa1;
    color: var(--light-color);
    font-weight: bold;
    font-size: 16px;
  }

  label {
    align-self: normal;
    margin: 0px 12px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    color: var(--light-color);
  }

  .checkbox {
    display: flex;
    align-self: baseline;
    width: 58%;

    label {
      width: 100%;
      align-self: center;
    }
  }
`;

export const FormContent = styled.section``;
