import React from 'react';
import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';

import StoneLogo from 'assets/stone-logo.svg';
import Button from 'components/Button';
import { FormTemplateProps } from 'types/templates/formTemplate';

import * as S from './styles';
import { Link } from 'react-router-dom';

const FormTemplate: React.FC<FormTemplateProps> = ({
  children,
  handleSubmit,
  title,
  subtitle,
  buttonLabel,
  redirect,
  footerComponent
}) => {
  return (
    <S.Wrapper>
      <div className="photo">
        <img src={StoneLogo} alt="Stone Logo" />
      </div>

      <section className="login">
        <form className="content" onSubmit={handleSubmit}>
          <header className="content__header">
            <div className="header--subtitle">
              {subtitle}{' '}
              {redirect && (
                <Link to={redirect}>
                  <ArrowLeft size={20} /> Voltar
                </Link>
              )}
            </div>
            {title}
          </header>

          {children}
          <Button className="content__button">{buttonLabel}</Button>
          {footerComponent}
        </form>
      </section>
    </S.Wrapper>
  );
};

export default FormTemplate;
