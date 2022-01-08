import styled from 'styled-components';
import * as C from 'styles/constants';

import EllipseTopImage from 'assets/ellipse.svg';
import Ellipse2BottomImage from 'assets/ellipse2.svg';

export const Wrapper = styled.section`
  background-image: url(${EllipseTopImage}), url(${Ellipse2BottomImage});
  background-size: 58% 55%;
  background-position: top right, bottom left;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${C.COLOR_PRIMARY};

  padding: 5rem;
  width: 100%;
  height: 45rem;
  font-size: 3rem;
  font-weight: bold;

  .content {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 65%;

    @media (max-width: ${C.MD}) {
      width: inherit;
    }
  }

  .title {
    margin-bottom: 2rem;
    color: ${C.COLOR_WHITE};

    span {
      font-size: 1.2rem;
      color: ${C.COLOR_GRAY_DARK};

      @media (max-width: ${C.MD}) {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: ${C.MD}) {
    font-size: 2rem;
    height: 30rem;
    padding: 1rem;
  }
`;
