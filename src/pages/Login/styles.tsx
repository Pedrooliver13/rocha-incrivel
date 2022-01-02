import styled from 'styled-components';

import * as C from 'styles/constants';

export const Wrapper = styled.section`
  max-width: 100%;
  display: flex;
  align-items: center;

  @media(max-width: ${C.MD}) {
    flex-direction: column;
  }

  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${C.COLOR_SECONDARY};
    padding: 1.5rem;

    width: 100%;
    height: 100vh;

    img {
      width: 35rem;
      padding: 1rem;
    }

    @media (max-width: ${C.MD}) {
      height: auto;
      background-color: ${C.COLOR_WHITE};

      img {
        width: 15rem;
      }
    }
  }

  .login {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 100%;
    width: 100%;
    height: 100vh;

    @media (max-width: ${C.MD}) {
      height: 100%;
    }
    
    .content {
      width: 500px;
      padding: 2rem;
      
      &__button {
        width 100%;
      }

      &__header {
        font-weight: bold;
        font-size: 3rem;
        line-height: 1.5;

        span {
          font-size: 1.6rem;
          display: block;
          color: ${C.COLOR_GRAY};
        }
      }

      @media (max-width: ${C.MD}) {
        width: 450px;

        &__header {
          font-weight: bold;
          font-size: 2.4rem;
        }
      }
    }
  }
`;
