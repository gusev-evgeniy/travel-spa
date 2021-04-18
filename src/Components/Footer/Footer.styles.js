import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: #242424;
  padding: 3rem 2rem 2rem 2rem;
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
    text-align: center;
    line-height: 2.1rem;
  }

  p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 30px;
    font-size: 20px;
  }

  .link_wrapper {
    display: flex;
    width: 100%;
    justify-content:center;
    flex-wrap:wrap;
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

    .links-row {
      max-width: 1050px;
      display: flex;
      justify-content: center;
      flex-wrap:wrap;
    }

    .links-column {
      display: flex;
      flex-direction: column;
      justify-content: start;
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

    .social-icon-link {
  color: #fff;
  font-size: 24px;
}

.social-media {
  max-width: 1000px;
  width: 100%;
}

.social-media-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
}

.social-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
}

.social-logo {
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.website-rights {
  color: #fff;
  margin-bottom: 16px;
}
@media screen and (max-width: 800px) {
  .social-media-wrap {
    flex-direction: column;

    .social-icons {
      margin-top: 10px;
    }
  }
}

    @media screen and (max-width: 500px) {
      .links-column {
        text-align: center;
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 2.4rem;

        input{
          margin-right: 0;
        }
      }
  }
`