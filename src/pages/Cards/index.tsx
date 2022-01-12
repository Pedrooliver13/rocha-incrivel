import Base from 'templates/Base';
import ListCards from 'templates/ListCards';
import SectionMain from 'components/SectionMain';

const Cards = () => {
  return (
    <Base>
      <SectionMain
        title="Lista de Cartões"
        buttonText="Voltar para Home"
        buttonHref="/"
      />

      <ListCards />
    </Base>
  );
};

export default Cards;
