import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 5%;
  background: #fff;

h2 {
  font-size: 2em;
  text-align: center;
  font-weight: 700;
  margin: 0 1rem 2rem 1rem;
}

ul {
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    flex-direction:column;
    max-width: 530px;
    align-items: center;
  }
}
`