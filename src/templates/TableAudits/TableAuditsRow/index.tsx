import React from 'react';

import { AuditType } from 'types/api/audits';
import { formatDate } from 'helpers/formatFunctions';

const TableAuditsRow: React.FC<AuditType> = ({
  id,
  before,
  after,
  requestedBy
}) => {
  return (
    <tr>
      <td data-th="ID">{id}</td>
      <td data-th="Nome">{before?.name}</td>
      <td data-th="Digitos">{before?.metadatas?.digits}</td>
      <td data-th="Status Antes">{before?.status}</td>
      <td data-th="Data">{formatDate(before?.createdAt)}</td>
      <td data-th="Status Depois">{after?.status}</td>
      <td data-th="Data">{formatDate(after?.createdAt)}</td>
      <td data-th="RequestBy">{requestedBy}</td>
    </tr>
  );
};

export default TableAuditsRow;
