import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  background: var(--primary-color);
`;

export const Content = styled.section`
  height: 100vh;

  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const TitleArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  footer span {
    color: var(--light-color);
  }

  h1 {
    font-size: 64px;
    letter-spacing: 2px;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--secundary-color);
  }

  h2 {
    color: #fff;
  }

  a.button-link,
  button.button-link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: var(--secundary-color);
    padding: 32px;
    border-radius: 4px;
    transition: all 400ms ease;
    font-weight: bold;

    @media (max-width: 640px) {
      font-size: 14px;
    }

    svg {
      margin-right: 12px;
      @media (max-width: 640px) {
        margin-right: 0px;
      }
    }

    :hover {
      filter: brightness(85%);
      transform: scale(1.03);
    }

    @media (max-width: 640px) {
      width: 100%;
      padding: 12px;
      flex-direction: column;
      text-align: center;
    }
  }

  button.button-link {
    background: var(--red-color);
    font-size: 20px;
    cursor: pointer;
  }

  a.signUp {
    background: var(--light-color);
    color: var(--dark-purple);
  }

  a.lostItems {
    background: #455a64;
  }

  a {
    margin: 16px;
    color: var(--light-color);
  }
`;

export const LogoArea = styled.section`
  width: 50%;

  @media (max-width: 820px) {
    width: 100%;
    order: -1;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;
