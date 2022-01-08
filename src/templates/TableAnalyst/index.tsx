import Table from 'components/Table';
import TableAnalystRow from './TableAnalystRow';
import SectionList from 'components/SectionList';
import { useGlobalContext } from 'hooks/use-global';

import { headCells } from 'templates/TableAnalyst/constants';

const TableAnalyst = () => {
  const { loggedUserData } = useGlobalContext();

  return (
    <SectionList title={`Infos Analista`} isTable>
      <Table headCells={headCells}>
        <TableAnalystRow {...loggedUserData} />
      </Table>
    </SectionList>
  );
};

export default TableAnalyst;
