import React from 'react';

import { Props } from 'types/templates/tableUsers';
import { masks } from 'helpers/masks';
import {
  formatDate,
  formatMoneyValue,
  formatMask,
  abbreviatesStrings
} from 'helpers/formatFunctions';

const TableUsersRow: React.FC<Props> = ({
  name,
  email,
  BirthDate,
  document,
  salaryBase,
  metadatas
}) => {
  return (
    <tr>
      <td data-th="Nome">{abbreviatesStrings(name) || '[Não Encontrado]'}</td>
      <td data-th="E-mail">{email || '[Não Encontrado]'}</td>
      <td data-th="Nascimento">{formatDate(BirthDate)}</td>
      <td data-th="Documento">{formatMask(document, masks.cpf)}</td>
      <td data-th="Salário">{formatMoneyValue(salaryBase)}</td>
      <td data-th="Verficado">{metadatas?.verified ? 'SIM' : 'NÃO'}</td>
    </tr>
  );
};

export default TableUsersRow;
