import React from 'react';

import { useGlobalContext } from 'hooks/use-global';

import { UserType } from 'types/api/users';
import { masks } from 'helpers/masks';
import {
  formatDate,
  formatMoneyValue,
  formatMask,
  abbreviatesStrings
} from 'helpers/formatFunctions';

const TableUsersRow: React.FC<UserType> = ({
  name,
  email,
  BirthDate,
  document,
  salaryBase,
  metadatas
}) => {
  const { hasAllPermission } = useGlobalContext();

  return (
    <tr>
      <td data-th="Nome">{abbreviatesStrings(name) || '[Não Encontrado]'}</td>
      <td data-th="E-mail">{email || '[Não Encontrado]'}</td>
      <td data-th="Nascimento">{formatDate(BirthDate)}</td>
      <td data-th="Documento">{formatMask(document, masks.cpf)}</td>
      <td data-th="Salário">
        {hasAllPermission ? formatMoneyValue(salaryBase) : '[Sem Permissão]'}
      </td>
      <td data-th="Verficado">{metadatas?.verified ? 'SIM' : 'NÃO'}</td>
    </tr>
  );
};

export default TableUsersRow;
