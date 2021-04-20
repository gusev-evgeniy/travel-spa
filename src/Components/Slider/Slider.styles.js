import styled from 'styled-components';

export const SliderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: -1;
  background-color: black;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .slide {
    opacity: 0;
    transition-duration: 1.2s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1.2s;
    transform: scale(1.08);
  }
`