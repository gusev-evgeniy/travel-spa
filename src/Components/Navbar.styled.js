import styled from 'styled-components';

export const WrapperNavbar = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  width: 100%;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  
    .menu-icon {
      i {
        color: white;
        font-size: 25px;
        cursor: pointer;
      }
    }
    
    ._container {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto
    }

    .navbar__logo {
      cursor: pointer;
      font-size: 2rem;
      display: flex;
      color: white;
     
      h1 {
        margin-right: 10px;
      }
    }

    .navbar__menu {
      height: 100%;
      display: flex;
      justify-content: end;
      align-items: center;

      ul {
        height: 100%;
        display: none;
        margin: 0 auto 0 0;
        display: flex;
        justify-content: flex-end;
        margin-right: 2rem;

        li {
          color: #fff;
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0.5rem 1rem;
          height: 100%;
          width: auto;
          font-size: 1.2rem;

          &:hover {
            border-bottom: 4px solid #fff;
            transition: all 0.2s ease-out;
          }
        }
      }
    }

    button {
      background-color: transparent;
      color: #fff;
      border: 1px solid white;
      transition: all 0.3s ease-out;
      padding: 8px 20px;
      border-radius: 2px;
      cursor: pointer;

      &:active {
        background-color: white;
        color: black;
        transition: all 0.3s ease-out;
      }
    }

    a {
    color: #fff;
    }
`