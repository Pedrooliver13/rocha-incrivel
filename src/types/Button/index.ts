import React from 'react';

export type Props = {
  secondary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  deleteTheme?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
