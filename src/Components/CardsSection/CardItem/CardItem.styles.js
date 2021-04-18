import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-flow: column;
  box-shadow: 0 6px 20px rgb(56 125 255 / 17%);
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  flex: 1;
  margin: 1rem 1rem;

  .image-wrapper {
    width: 100%;
    background-color: red;
    position: relative;
  }

  img {
    width: 100%;
    object-fit: cover;
    &:hover {
      transform: scale(1.1);
      transition: transform 1s;
    }
  }

  span {
    position: absolute;
    z-index: 20;
    color: white;
    left: 10px;
    bottom: 0;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
  }

  p{
    color: #252e48;
    padding: 20px 30px 30px;
    font-size: 18px;
    line-height: 24px;
  }

  span {

  }
`