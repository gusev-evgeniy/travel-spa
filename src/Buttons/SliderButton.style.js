import styled from 'styled-components';

export const SliderButtonWrapper = styled.div`
outline: none;
user-select: none;
 i {
      position: absolute;
      font-size: 60px;
      opacity: 0.7;
      top: 55%;
      z-index: 100;
      cursor: pointer;
      left: ${props => props.type === 'prev' ? '5%' : null};
      right: ${props => props.type === 'next' ? '5%' : null};
      transform: ${props => props.type === 'next' && 'rotate(180deg)'};
      outline: none;
      user-select: none;
    }

    @media screen and (max-width: 768px) {
    & {
      opacity: 0;
      display: none;
    }
  }
`
