import styled from 'styled-components';

import * as C from 'styles/constants';

type SelectStyledProps = {
  hasError?: boolean;
};

export const Wrapper = styled.div<SelectStyledProps>`
  height: 12rem;

  label {
    line-height: 2.5;
    font-size: 2rem;
    color: ${C.COLOR_GRAY};
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 16px 24px;
    margin-bottom: 0.5rem;
    font-size: 16px;

    border: 2px solid ${C.COLOR_GRAY_LIGHT};
    color: ${C.COLOR_GRAY};

    ${({ hasError }) => hasError && `border: 2px solid ${C.COLOR_ERROR}`};
  }

  .error {
    font-weight: lighter;
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${C.COLOR_ERROR};
  }
`;
