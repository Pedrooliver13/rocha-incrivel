import React from 'react';

import Button from 'components/Button';
import { FormTemplateProps } from 'types/templates/formTemplate';
import StoneLogo from 'assets/stone-logo.svg';

import * as S from './styles';

const FormTemplate: React.FC<FormTemplateProps> = ({
  children,
  handleSubmit,
  title,
  subtitle,
  buttonLabel
}) => {
  return (
    <S.Wrapper>
      <div className="photo">
        <img src={StoneLogo} alt="Stone Logo" />
      </div>

      <section className="login">
        <form className="content" onSubmit={handleSubmit}>
          <h1 className="content__header">
            <span>{subtitle}</span>
            {title}
          </h1>

          {children}
          <Button className="content__button">{buttonLabel}</Button>
        </form>
      </section>
    </S.Wrapper>
  );
};

export default FormTemplate;
