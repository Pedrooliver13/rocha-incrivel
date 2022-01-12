import React from 'react';

import { RadioProps } from 'types/components/radio';

import * as S from './styles';

const Radio: React.FC<RadioProps> = ({ name, options, value, onChange }) => {
  return (
    <S.Wrapper>
      {options.map(({ optionLabel, optionValue }) => (
        <label key={optionValue}>
          <input
            id={name}
            name={name}
            type="radio"
            value={optionValue}
            checked={value === optionValue}
            onChange={onChange}
          />
          {optionLabel}
        </label>
      ))}
    </S.Wrapper>
  );
};

export default Radio;
