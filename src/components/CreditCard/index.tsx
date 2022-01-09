import MasterCardLogo from 'assets/mastercard_logo.svg';

import { Props } from 'types/components/creditCard';
import { abbreviatesStrings } from 'helpers/formatFunctions';

import * as S from './styles';
import { useGlobalContext } from 'hooks/use-global';

const CreditCard = ({ status, metadatas }: Props) => {
  const { hasAllPermission } = useGlobalContext();

  return (
    <S.Wrapper>
      <div className="card">
        <header>
          <h1>CreditCard</h1>
          <img src={MasterCardLogo} alt="Master Card Logo" />
        </header>

        <div className="card--content">
          <h2>{abbreviatesStrings(metadatas.name) || '[Não Encontrado]'}</h2>
        </div>
      </div>
      <div className="info">
        <p>Digits: {metadatas.digits}</p>
        <p>Limit: {hasAllPermission ? metadatas.limit : '[Sem Permissão]'}</p>
        <p>Status: {status}</p>
      </div>
    </S.Wrapper>
  );
};

export default CreditCard;
