import styled, { css } from 'styled-components';

import { Props } from 'types/Button';
import * as C from 'styles/constants';

const buttonModifier = {
  primary: {
    backgroundColor: `${C.COLOR_PRIMARY}`,
    color: `${C.COLOR_WHITE}`
  },
  secondary: {
    backgroundColor: `${C.COLOR_SECONDARY}`,
    borderRadius: '1rem',
    color: `${C.COLOR_WHITE}`
  },
  deleteTheme: {
    backgroundColor: `${C.COLOR_ERROR}`,
    color: `${C.COLOR_WHITE}`
  },
  disabled: {
    backgroundColor: `${C.COLOR_GRAY_LIGHT}`,
    color: `${C.COLOR_GRAY_DARK}`,
    cursor: 'none'
  }
};

export const Wrapper = `
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.5rem;
  padding: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 2rem;
  margin-bottom: 2rem;

  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;

  .icon {
    margin-right: 1rem;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const WrapperButton = styled.button<Props>`
  ${Wrapper};

  ${({ secondary, deleteTheme, disabled }) => css`
    ${!secondary && buttonModifier.primary}
    ${secondary && buttonModifier.secondary}
    ${secondary && buttonModifier.secondary}
    ${deleteTheme && buttonModifier.deleteTheme}
    ${disabled && buttonModifier.disabled}
  `}
`;

export const WrapperLink = styled.a<Props>`
  ${Wrapper};

  ${({ secondary, deleteTheme, disabled }) => css`
    ${!secondary && buttonModifier.primary}
    ${secondary && buttonModifier.secondary}
    ${deleteTheme && buttonModifier.deleteTheme}
    ${disabled && buttonModifier.disabled}
  `}
`;
