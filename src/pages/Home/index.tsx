import Base from 'templates/Base';
import SectionMain from 'components/SectionMain';
import { useGlobalContext } from 'hooks/use-global';

const Home = () => {
  const { loggedUserData } = useGlobalContext();

  return (
    <Base>
      <SectionMain
        title={`Olá, ${loggedUserData?.email}`}
        buttonText="Visualizar meus dados"
        buttonHref="/"
      />
    </Base>
  );
};

export default Home;
