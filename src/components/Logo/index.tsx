import { Link } from 'react-router-dom';
import StoneLogo from 'assets/stone-logo.svg';

import * as S from './styles';

const Logo = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <img src={StoneLogo} alt="Logo marca" />
      </Link>
    </S.Wrapper>
  );
};

export default Logo;
