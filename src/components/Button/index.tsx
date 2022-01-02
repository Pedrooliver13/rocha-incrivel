import { Props } from 'types/Button';

import * as S from './styles';

const Button: React.FC<Props> = ({
  children,
  secondary,
  disabled,
  className
}) => {
  return (
    <S.WrapperButton
      secondary={secondary}
      disabled={disabled}
      className={className}
    >
      {children}
    </S.WrapperButton>
  );
};

const LinkButton: React.FC<Props> = ({
  children,
  secondary,
  disabled,
  href,
  className,
  onClick
}) => {
  return (
    <S.WrapperLink
      href={href}
      secondary={secondary}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </S.WrapperLink>
  );
};

export { Button, LinkButton };
