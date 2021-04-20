import styled from 'styled-components';

export const PagesWrapper = styled.div`
display: flex;
justify-content: center;

overflow: hidden;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }

  h2 {
    margin-top: 45vh;
    transform: translateY(-50%);
    color: #fff;
    font-size: 10vw;
    letter-spacing: 1rem;
    text-transform: uppercase;
  }
`