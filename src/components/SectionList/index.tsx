import React from 'react';

import { SectionListProps } from 'types/components/sectionList';
import { Container } from 'styles/container';

import * as S from './styles';

const SectionList: React.FC<SectionListProps> = ({
  children,
  isTable,
  components,
  title
}) => {
  return (
    <Container>
      <S.Wrapper>
        <div className="content">
          <div className="content--title">
            <h1>{title}</h1> {components}
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
