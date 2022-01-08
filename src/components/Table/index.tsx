import { Props } from 'types/components/table';

import * as S from './styles';

const Table: React.FC<Props> = ({ headCells, children }) => {
  return (
    <S.Wrapper>
      <thead>
        <tr>
          {headCells?.map(({ id, label }) => (
            <th key={id}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </S.Wrapper>
  );
};

export default Table;
