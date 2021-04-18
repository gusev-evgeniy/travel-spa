import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;

  img {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
  }   

  h2 {
    color: #fff;
    font-size: 100px;
    margin-top: -100px;
    text-transform: uppercase;
  }

  p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .buttons {
    margin-top: 32px;
    
    button {
      background-color: transparent;
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      padding: 12px 26px;
      border: 1px solid white;
      transition: all 0.3s ease-out;
      padding: 8px 20px;
      border-radius: 2px;
      margin: 6px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 960px) {
    h2 {
      font-size: 70px;
      margin-top: -150px;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 50px;
    }

    p {
      font-size: 30px;
    }

    .buttons {
      display: block;
      text-decoration: none;
    }

    button {
      width: 100%;
    }
  }
`