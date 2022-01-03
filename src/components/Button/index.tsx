import { Props } from 'types/Button';

import * as S from './styles';

const Button: React.FC<Props> = ({
  children,
  secondary,
  deleteTheme,
  disabled,
  className,
  href,
  onClick,
  icon
}) => {
  return (
    <>
      {!href ? (
        <S.WrapperButton
          deleteTheme={deleteTheme}
          secondary={secondary}
          disabled={disabled}
          className={className}
          onClick={onClick}
        >
          {icon && <div className="icon">{icon}</div>}
          {children}
        </S.WrapperButton>
      ) : (
        <S.WrapperLink
          to={href}
          deleteTheme={deleteTheme}
          secondary={secondary}
          disabled={disabled}
          className={className}
          onClick={onClick}
        >
          {icon && <div className="icon">{icon}</div>}
          {children}
        </S.WrapperLink>
      )}
    </>
  );
};

export default Button;
