import { Props } from 'types/components/button';

import * as S from './styles';

const Button: React.FC<Props> = ({
  children,
  secondary,
  tertiary,
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
          tertiary={tertiary?.toString()}
          secondary={secondary?.toString()}
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
          tertiary={tertiary?.toString()}
          secondary={secondary?.toString()}
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
