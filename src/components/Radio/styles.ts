import styled from 'styled-components';

import * as C from 'styles/constants';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  line-height: 2;

  label {
    cursor: pointer;
    font-size: 1.8rem;
    text-transform: capitalize;
    font-smooth: always;
  }

  input {
    margin-right: 1rem;
  }

  @media (max-width: ${C.MD}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
