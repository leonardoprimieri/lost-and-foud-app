import { Link } from 'react-router-dom';
import { FiLogIn, FiMap, FiMessageCircle, FiUserPlus } from 'react-icons/fi';

import manLookingForSomething from '../../assets/looking.svg';

import { isLogged } from '../../helpers/AuthHandler';

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
          <div className="buttons" style={{ display: 'flex' }}>
            <Link to="lost-items" className="button-link">
              <FiMap size={24} color="#fff" />
              <span>Itens perdidos</span>
            </Link>
            <Link to="leave-comment" className="signUp button-link">
              <FiMessageCircle size={24} color="var(dark-purple)" />
              <span>Deixar um comentário</span>
            </Link>
          </div>
          <footer>
            <span>Desenvolvido por Leonardo Merlo Primieri</span> <br />
            <span>Email: leo.primieri@gmail.com</span>
          </footer>
        </TitleArea>
        <LogoArea>
          <img src={manLookingForSomething} alt="A man looking for something" />
        </LogoArea>
      </Content>
    </Container>
  );
};

export default Home;
