import React from 'react';

import { SelectProps } from 'types/components/selects';

import * as S from './styles';

const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  children,
  defaultValue,
  error
}) => {
  return (
    <S.Wrapper hasError={!!error}>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">Selecione</option>
        {children}
      </select>
      {error && <p className="error">{error}</p>}
    </S.Wrapper>
  );
};

export default Select;
