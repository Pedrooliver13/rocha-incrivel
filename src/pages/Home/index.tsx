import Base from 'templates/Base';
import ListCards from 'templates/ListCards';
import SectionMain from 'components/SectionMain';
import { useGlobalContext } from 'hooks/use-global';

const Home = () => {
  const { loggedUserData } = useGlobalContext();

  return (
    <Base>
      <SectionMain
        title={
          loggedUserData ? `Olá, ${loggedUserData?.email}` : 'Olá Visitante'
        }
        buttonText="Visualizar Usuários"
        buttonHref="/users"
      />

      <ListCards />
    </Base>
  );
};

export default Home;
