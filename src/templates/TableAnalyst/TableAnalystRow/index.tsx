import React from 'react';

import { AnalystsType } from 'types/Api/analysts';

const TableAnalystRow: React.FC<AnalystsType> = ({ email, roles }) => {
  return (
    <tr>
      <td data-th="E-mail">{email}</td>
      <td data-th="Roles">{roles?.toString()}</td>
    </tr>
  );
};

export default TableAnalystRow;
