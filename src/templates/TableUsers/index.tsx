import { useEffect, useState } from 'react';

import Table from 'components/Table';
import TableUsersRow from './TableUsesRow';
import SectionList from 'components/SectionList';

import { UserType } from 'types/Api/users';
import { headCells } from 'templates/TableUsers/constants';

import { getAllUsers } from 'services/users';

const TableUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <SectionList title="Lista de Usúarios" isTable>
      <Table headCells={headCells}>
        {users.map((user: UserType) => (
          <TableUsersRow key={user?.id} {...user} />
        ))}
      </Table>
    </SectionList>
  );
};

export default TableUsers;
