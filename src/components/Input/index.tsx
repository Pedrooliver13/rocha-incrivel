import { EyeSlash, Eye } from '@styled-icons/bootstrap';
import { useState } from 'react';

import { Props } from 'types/components/input';
import * as S from './styles';

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  onBlur,
  error,
  onChange,
  defaultValue,
  required,
  isPassword
}: Props) => {
  const [inputType, setInputType] = useState(type);
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    if (!isPassword) return;

    const newType = showPassword ? 'text' : 'password';
    setInputType(newType);
    setShowPassword(!showPassword);
  };

  return (
    <S.Wrapper hasError={!!error}>
      <label className="label" htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        className="input"
        type={inputType}
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isPassword && (
        <div className="icon" onClick={handleShowPassword}>
          {showPassword ? <Eye /> : <EyeSlash />}
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </S.Wrapper>
  );
};

export default Input;
