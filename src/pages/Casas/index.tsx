import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import tully from '../../assets/images/tully.jpg';
import { Header, Main, Menu, Card, Footer } from './styles';

const Casas: React.FC = () => {
  return (
    <Main>
      <Header>
        <h1>Casas</h1>
        <a href="/">
          <BiArrowBack>Home</BiArrowBack>
        </a>
      </Header>
      <Menu>
        <Card>
          <img src={tully} alt="jon snow" />
          <a href="/Casa1"> + Informações</a>
        </Card>
        <Card>
          <img src={tully} alt="jon snow" />
          <a href="/Casa1"> + Informações</a>
        </Card>
        <Card>
          <img src={tully} alt="jon snow" />
          <a href="/Casa1"> + Informações</a>
        </Card>
        <Card>
          <img src={tully} alt="jon snow" />
          <a href="/Casa1"> + Informações</a>
        </Card>
        <Card>
          <img src={tully} alt="jon snow" />
          <a href="/Casa1"> + Informações</a>
        </Card>
      </Menu>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Main>
  );
};

export default Casas;
