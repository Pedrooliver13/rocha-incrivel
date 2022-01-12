import Base from 'templates/Base';
import SectionMain from 'components/SectionMain';

const Page404 = () => {
  return (
    <Base>
      <SectionMain
        title="Página não encontrada :("
        buttonText="Voltar para Home"
        buttonHref="/"
      />
    </Base>
  );
};

export default Page404;
