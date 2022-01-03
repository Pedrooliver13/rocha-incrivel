import { Props } from 'types/Button';

import * as S from './styles';

const Button: React.FC<Props> = ({
  children,
  secondary,
  deleteTheme,
  disabled,
  className,
  icon
}) => {
  return (
    <S.WrapperButton
      deleteTheme={deleteTheme}
      secondary={secondary}
      disabled={disabled}
      className={className}
    >
      {icon && <div className="icon">{icon}</div>}
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
  onClick,
  icon,
  deleteTheme
}) => {
  return (
    <S.WrapperLink
      href={href}
      deleteTheme={deleteTheme}
      secondary={secondary}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {icon && <div className="icon">{icon}</div>}
      {children}
    </S.WrapperLink>
  );
};

export { Button, LinkButton };
