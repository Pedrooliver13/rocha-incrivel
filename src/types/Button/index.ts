import React from 'react';

export type Props = {
  secondary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
