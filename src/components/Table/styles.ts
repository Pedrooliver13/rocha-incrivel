import styled from 'styled-components';
import * as C from 'styles/constants';

export const Wrapper = styled.table`
  min-width: 100%;
  background-color: ${C.COLOR_GRAY};
  border-radius: 0.5rem;

  font-size: 1.4rem;
  margin: 2rem 0;
  overflow: hidden;

  thead {
    background-color: ${C.COLOR_GRAY_LIGHT2};
    overflow: auto;
    color: ${C.COLOR_GRAY};

    @media (max-width: ${C.XL}) {
      height: 1rem;
    }
  }

  tbody {
    background-color: ${C.COLOR_WHITE};
  }

  tr {
    @media (max-width: ${C.XL}) {
      &:nth-of-type(odd) {
        background: ${C.COLOR_GRAY_LIGHT};
      }
    }
  }

  td,
  th {
    padding: 2rem 1rem;

    @media (max-width: ${C.MD}) {
      display: table-cell;
    }
  }

  th {
    text-align: left;

    @media (max-width: ${C.XL}) {
      display: none;
    }
  }

  td {
    border-bottom: 1px solid ${C.COLOR_GRAY_LIGHT};
    word-break: break-word;

    p {
      max-width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:first-child {
      padding-top: 0.5em;
    }
    &:last-child {
      padding-bottom: 0.5em;
    }

    @media (max-width: ${C.XL}) {
      width: 100%;
      border: none;
      display: block;
      padding: 0.25em 0.5em;
      p {
        max-width: 60rem;
      }

      &:before {
        color: ${C.COLOR_PRIMARY};
        margin-bottom: 3px;
        content: attr(data-th);
        min-width: 98px;
        font-size: 10px;
        line-height: 10px;
        font-weight: bold;
        text-transform: uppercase;
        color: #969696;
        display: block;
      }
    }

    @media (max-width: ${C.SM}) {
      p {
        max-width: 25rem;
      }
    }
  }
`;
