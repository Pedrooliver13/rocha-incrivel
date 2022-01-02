import { useEffect, useState } from 'react';

import Header from 'components/Header';
import { useGlobalContext } from 'hooks/use-global';
import { getAllUsers } from 'services/users';
import { UsersType } from 'types/Api/users';

const Home = () => {
  const { loggedUserData, userLogout } = useGlobalContext();
  const [users, setUsers] = useState<UsersType[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await getAllUsers();
      setUsers(response);
    };

    getUsers();
  }, []);

  return (
    <div>
      <Header />

      <button onClick={userLogout}>Deslogar</button>

      <h1>{loggedUserData?.email}</h1>
      <div>
        {users.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{new Date(user.BirthDate).toLocaleDateString()}</li>
            <li>
              {user.salaryBase.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
