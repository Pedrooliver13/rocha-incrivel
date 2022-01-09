import styled from 'styled-components';

import * as C from 'styles/constants';

import EllipseTopImage from 'assets/ellipse.svg';
import Ellipse2BottomImage from 'assets/ellipse2.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  width: 100%;

  border: 2px solid ${C.COLOR_GRAY_LIGHT};
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 2px solid ${C.COLOR_PRIMARY};
    transform: scale(1.02);
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: url(${EllipseTopImage}), url(${Ellipse2BottomImage}),
      ${C.COLOR_GRADIENT_PRIMARY};
    background-position: top right, bottom left;
    background-repeat: no-repeat;
    color: ${C.COLOR_WHITE};
    max-width: 270px;
    max-height: 184px;
    width: 100%;
    height: 164px;
    border-radius: 30px;
    padding: 2.5rem;
    margin-top: -3rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &--content {
      padding: 1rem 0;
      font-size: 1.5rem;
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    line-height: 2;
    font-size: 1.3rem;
    padding: 1rem 1.8rem;
  }

  @media (max-width: ${C.MD}) {
    max-width: 100%;
  }
`;
