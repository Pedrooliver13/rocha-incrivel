import styled from 'styled-components';
import * as C from 'styles/constants';

export const Wrapper = styled.header`
  padding: 1rem;

  img {
    width: 100px;
  }

  .icon {
    margin-right: 1rem;
  }

  .content__mobile {
    padding: 1rem 0;
    display: none;

    @media (max-width: ${C.MD}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &--backdrop {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.6);
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      z-index: 99999;
    }

    &--menu {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      background-color: ${C.COLOR_WHITE};
      color: ${C.COLOR_SECONDARY};
      font-size: 1.6rem;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 2.4rem 4rem 2rem 2.4rem;
      height: 100vh;
      right: 0;
      top: 0;
      transform: translateX(200%);
      transition: all 235ms cubic-bezier(0.95, 0.05, 0.795, 0.035);
      max-width: 320px;
      width: 100%;
      z-index: 99999;

      .mobile-menu--header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2rem;

        border-bottom: 1px solid ${C.COLOR_GRAY_LIGHT};

        .menu-header--close {
          color: ${C.COLOR_SECONDARY};
          cursor: pointer;
        }
      }

      .mobile-menu--body {
        margin: 2rem 0;
        height: 80%;

        li {
          width: 100%;
          font-weight: lighter;
          padding: 1.2rem 0;
          margin-bottom: 1rem;

          .active {
            font-weight: bold;
          }
        }
      }

      .mobile-menu--footer {
        border-top: 1px solid ${C.COLOR_GRAY_LIGHT};
        padding: 2rem 0;

        a {
          display: block;
          padding: 1rem 0;
          width: 100%;
        }
      }
    }

    &.is-active {
      .content__mobile--backdrop {
        opacity: 1;
        visibility: visible;
      }

      .content__mobile--menu {
        transform: none;
        transition: all 205ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }

  .content__desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    ul {
      width: 40%;
      font-size: 1.5rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${C.COLOR_BLACK};

      li {
        cursor: pointer;
      }
    }

    @media (max-width: ${C.MD}) {
      display: none;
    }
  }
`;
