import React from 'react';

import { Props } from 'types/components/sectionList';
import { Container } from 'styles/container';

import * as S from './styles';

const SectionList: React.FC<Props> = ({ children, isTable, title }) => {
  return (
    <Container>
      <S.Wrapper>
        <div className="content">
          <div className="content--title">
            <h1>{title}</h1>
          </div>
          {isTable ? (
            <>{children}</>
          ) : (
            <div className="content--items">{children}</div>
          )}
        </div>
      </S.Wrapper>
    </Container>
  );
};

export default SectionList;
