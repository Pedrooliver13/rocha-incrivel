import { useEffect, useState } from 'react';

import Table from 'components/Table';
import TableAuditsRow from './TableAuditsRow';
import SectionList from 'components/SectionList';

import { AuditType } from 'types/Api/audits';
import { headCells } from 'templates/TableAudits/constants';

import { getAllAudits } from 'services/audits';

const TableAudits = () => {
  const [audits, setAudits] = useState([]);

  useEffect(() => {
    getAllAudits().then(setAudits);
  }, []);

  return (
    <SectionList title="Lista de Auditorias" isTable>
      <Table headCells={headCells}>
        {audits.map((audits: AuditType) => (
          <TableAuditsRow key={audits?.id} {...audits} />
        ))}
      </Table>
    </SectionList>
  );
};

export default TableAudits;
