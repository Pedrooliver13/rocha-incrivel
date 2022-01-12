import Button from 'components/Button';
import { Props } from 'types/components/sectionMain';

import * as S from './styles';

const SectionMain = ({
  title,
  subtitle,
  buttonText,
  buttonHref = '/'
}: Props) => {
  return (
    <S.Wrapper>
      <div className="content">
        <div className="title">
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>

        {buttonText && buttonHref && (
          <div className="buttons">
            <Button isLink href={buttonHref} secondary>
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </S.Wrapper>
  );
};

export default SectionMain;
