import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: absolute;
  left: 100%;
  opacity: 0;
  top: 80px;
  transition: all 0.5s ease;

  &.activate {
    left: 0;
   opacity: 1;
  }

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    li {
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
    }
    .navbar__links {
      color: #fff;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 2rem;
      width: 100%;
      display: table;

      &:hover {
        background-color: #fff;
        color: #242424;
        border-radius: 0;
      }
    }
  }

  button {
    display: block;
    text-align: center;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;

      &:active {
        background-color: white;
        color: black;
        transition: all 0.3s ease-out;
      }
    }
`