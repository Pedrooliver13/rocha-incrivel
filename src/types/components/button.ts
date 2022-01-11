import React from 'react';

export type Props = {
  secondary?: boolean | string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  tertiary?: boolean | string;
  isLink?: boolean;
  onClick?: (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
