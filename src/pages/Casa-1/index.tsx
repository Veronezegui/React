import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import tully from '../../assets/images/tully.jpg';
import { Header, Main, Menu, Card, Footer } from './styles';

const Casa1: React.FC = () => {
  return (
    <Main>
      <Header>
        <h1>Tully</h1>
        <a href="/Casas">
          <BiArrowBack />
        </a>
      </Header>
      <Menu>
        <Card>
          <img src={tully} alt="tully" />
          <div>
            <p>Name: House Tully of Riverrun</p>
            <p>Region: The Riverlands</p>
            <p>Words: Family, Duty, Honor.</p>
            <p>Titles: Lord of Riverrun, Lord Paramount of the Trident.</p>
          </div>
        </Card>
      </Menu>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Main>
  );
};

export default Casa1;
