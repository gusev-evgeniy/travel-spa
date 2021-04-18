import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem;
  background: #fff;

h2 {
  font-size: 2em;
  text-align: center;
  font-weight: 700;
}

ul {
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
  flex-direction:column
}
}
`