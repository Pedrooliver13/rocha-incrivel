import React from 'react';

import { Props } from 'types/hooks/use-form';
import { masks } from 'helpers/masks';
import { requiredFieldMessage } from 'helpers/commonMessages';

const useForm = (props?: Props) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  const validate = () => {
    if (!value) {
      setError(requiredFieldMessage);
      return false;
    }

    if (props && !props.regex?.test(value)) {
      setError(props.messageError || requiredFieldMessage);
      return false;
    }

    setError('');
    return true;
  };

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (error) validate();
    setValue(target.value);
  };

  const onBlur = () => validate();

  return { value, onChange, error, onBlur, validate };
};

export { useForm, masks };
