import styled from 'styled-components';

import * as C from 'styles/constants';

export const Wrapper = styled.section`
  max-width: 100%;
  max-height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;

  @media (max-width: ${C.MD}) {
    grid-template-columns: 1fr;
  }

  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${C.COLOR_SECONDARY};
    width: 100%;

    img {
      width: 35rem;
      height: 100vh;
    }

    @media (max-width: ${C.MD}) {
      background-color: ${C.COLOR_WHITE};

      img {
        width: 15rem;
        height: 50%;
        margin: 1rem auto;
      }
    }
  }

  .login {
    background-color: ${C.COLOR_WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 100%;
    width: 100%;

    @media (max-width: ${C.MD}) {
      height: 100%;
    }

    .content {
      max-width: 500px;
      width: 100%;
      padding: 2rem;

      &__button {
        width: 100%;
      }

      &__header {
        font-weight: bold;
        font-size: 3rem;
        line-height: 1.5;

        .header--subtitle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.6rem;

          a {
            font-weight: bold;
            color: ${C.COLOR_PRIMARY};
            margin-left: 1rem;

            svg {
              margin-right: 0.2rem;
            }
          }
        }
      }

      @media (max-width: ${C.MD}) {
        &__header {
          font-weight: bold;
          font-size: 2.4rem;
        }
      }
    }
  }
`;
