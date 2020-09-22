import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { Main, Header, Menu, Card, Footer } from './styles';

import jon from '../../assets/images/jon.jpg';

const Personagens: React.FC = () => {
  return (
    <Main>
      <Header>
        <h1>Personagens</h1>
        <a href="/">
          <BiArrowBack>Home</BiArrowBack>
        </a>
      </Header>
      <Menu>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
        <Card>
          <img src={jon} alt="jon snow" />
          <a href="/Jon"> + Informações</a>
        </Card>
      </Menu>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Main>
  );
};

export default Personagens;
