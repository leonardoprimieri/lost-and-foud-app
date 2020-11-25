import styled from 'styled-components';

export const Container = styled.div`
  width: 120px;
  background: var(--dark-purple);
  position: fixed;
  top: 0;
  left: 0;

  padding: 32px;

  height: 100vh;

  z-index: 9999;
  transition: all 200ms ease;
  @media (max-width: 725px) {
    padding: 4px;
    width: 100vw;
    height: auto;
  }

  span {
    color: var(--light-color);
    font-weight: 900;
    font-size: 24px;

    @media (max-width: 725px) {
      display: none;
    }
  }
  .button-link.active-link {
    background: var(--primary-color);
  }
  button,
  a.button-link {
    background: var(--dark-purple);
    filter: brightness(85%);
    margin: 12px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    transition: all 400ms ease;

    @media (max-width: 725px) {
      margin: 6px;
      padding: 8px;
    }

    :hover {
      filter: brightness(50%);
    }
  }
`;

export const Content = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media (max-width: 725px) {
      flex-direction: row;
      height: 100%;
    }
  }
`;
