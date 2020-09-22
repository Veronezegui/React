import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import jon from '../../assets/images/jon.jpg';

import { Main, Header, Menu, Card, Footer } from './styles';

const Jon: React.FC = () => {
  return (
    <Main>
      <Header>
        <h1>Jon Snow</h1>
        <a href="/Personagens">
          <BiArrowBack>Home</BiArrowBack>
        </a>
      </Header>
      <Menu>
        <Card>
          <img src={jon} alt="jon" />
          <div>
            <p>Name: Jon Snow</p>
            <p>Gender: Male</p>
            <p>Culture: Northmen</p>
            <p>Born: In 283 AC</p>
            <p>Titles: Lord Commander of the Nights Watch</p>
            <p>
              Aliases: Lord Snow, Ned, Starks Bastard, The Snow of Winterfell.
            </p>
          </div>
        </Card>
      </Menu>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Main>
  );
};

export default Jon;
