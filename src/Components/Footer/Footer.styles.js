import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: #242424;
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  ._container {
    display: flex;
  flex-direction: column;
    align-items: center;
  }
  
  h2 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
  }

  p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 20px;
  }

  input {
    padding: 8px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    margin-bottom: 16px;
    border: 1px solid #fff;
  }

  button {
      font-size:18px;
      background-color: transparent;
      color: #fff;
      padding: 8px 20px;
      border: 1px solid white;
      transition: all 0.3s ease-out;
      padding: 8px 20px;
      border-radius: 2px;
      cursor: pointer;
    }

    .link_wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap:wrap;
    }

    .links-row {
      max-width: 1050px;
      display: flex;
      justify-content: center;
      flex-wrap:wrap;
    }

    .links-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 16px;
      width: 160px;
      box-sizing: border-box;

      li:first-child {
        font-size: 1.5em;
        margin-bottom: 16px;
      }

      li {
        margin-bottom: 0.5rem;
      }
    }
`