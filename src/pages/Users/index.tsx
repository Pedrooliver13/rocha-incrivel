import Base from 'templates/Base';
import TableUsers from 'templates/TableUsers';
import SectionMain from 'components/SectionMain';

const Users = () => {
  return (
    <Base>
      <SectionMain
        title="Lista de Usuários"
        buttonText="Voltar para Home"
        buttonHref="/"
      />

      <TableUsers />
    </Base>
  );
};

export default Users;
