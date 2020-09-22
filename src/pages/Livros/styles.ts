import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  section {
    position: absolute;
    text-align: center;
    h3 {
      margin-top: 40px;
      color: white;
      font-weight: bold;
      font-size: 25px;
    }
    img {
      width: 840px;
      height: 70px;
    }
  }
`;
export const Header = styled.div`
  width: 100vw;
  display: static;
  min-width: 100vw;
  background: linear-gradient(
    -45deg,
    rgb(240, 248, 255),
    rgb(30, 144, 255),
    rgb(65, 105, 225),
    rgb(25, 25, 112)
  );
  background-image: linear-gradient(
    -45deg,
    rgb(240, 248, 255),
    rgb(30, 144, 255),
    rgb(65, 105, 225),
    rgb(25, 25, 112)
  );
  background-position-x: initial;
  background-position-y: initial;
  background-size: 500% 500%;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 500px;
  }
  h1 {
    color: white;
    position: absolute;
  }
  a {
    color: white;
    text-decoration: none;
    margin-left: -90vw;
  }
  @media (max-width: 600px) {
    
  }

  @media (max-width:800px) {
    a {
      color: white;
      text-decoration: none;
      margin-left: -90vw;
    }
  }
`;

export const Menu = styled.div`
  min-width: 293px;
  min-height: 307px;
  display: ruby-base-container;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px auto;
  padding: 50px;

  img {
    border-radius: 9px;
    width: 300px;
    height: 30vh;
  }

`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  width: 293px;

  a {
    margin-top: 5px;
    background: #161925;
    text-decoration: none;
    color: white;
    padding: 10px;
    border-radius: 3px;
  }
  a:hover {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    align-items: center;
    margin-bottom: 40px auto;
    min-width:300px;
    width:400px;
    max-width:400px;
    
    padding:0px;
    img {
      min-width:200px;
      width: 40%;
      max-width:300px;
      margin-left:10vw;
      margin-right:10vw;
    }
  }

`;

export const Footer = styled.div`
  visibility: visible;
  width: 100%;
  height: 20vh;
  background: linear-gradient(
    -45deg,
    rgb(240, 248, 255),
    rgb(30, 144, 255),
    rgb(65, 105, 225),
    rgb(25, 25, 112)
  );
  background-image: linear-gradient(
    -45deg,
    rgb(240, 248, 255),
    rgb(30, 144, 255),
    rgb(65, 105, 225),
    rgb(25, 25, 112)
  );
  background-position-x: initial;
  background-position-y: initial;
  background-size: 500% 500%;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 9px;

  p {
    color: white;
  }

  @media (max-width: 600px) {
    visibility: hidden;
    width: 100vw;
  }
`;
