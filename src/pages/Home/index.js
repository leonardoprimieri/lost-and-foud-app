import { Link } from 'react-router-dom';
import { FiLogIn, FiMap, FiPower, FiUserPlus } from 'react-icons/fi';

import manLookingForSomething from '../../assets/looking.svg';

import { isLogged, logOut } from '../../helpers/AuthHandler';

import { Container, Content, TitleArea, LogoArea, Buttons } from './styles';

const Home = () => {
  return (
    <Container>
      <Content>
        <TitleArea>
          <h1>Find it!</h1>
          <h2>Encotre ou cadastre itens perdidos!</h2>
          <Buttons>
            {isLogged() ? (
              <></>
            ) : (
              <>
                <Link to="sign-up" className="signUp button-link">
                  <FiUserPlus size={24} color="var(--dark-purple)" />
                  <span>Cadastre-se</span>
                </Link>
                <Link to="sign-in" className="button-link">
                  <FiLogIn size={24} color="#fff" />
                  <span>Fazer Login</span>
                </Link>
              </>
            )}
          </Buttons>
          <Link to="lost-items" className="lostItems button-link">
            <FiMap size={24} color="#fff" />
            <span>Itens perdidos</span>
          </Link>
        </TitleArea>
        <LogoArea>
          <img src={manLookingForSomething} alt="A man looking for something" />
        </LogoArea>
        <footer>
          <span>Desenvolvido por Leonardo Merlo Primieri</span> <br />
          <span>Email: leo.primieri@gmail.com</span>
        </footer>
      </Content>
    </Container>
  );
};

export default Home;
