import Base from 'templates/Base';
import TableAudits from 'templates/TableAudits';
import SectionMain from 'components/SectionMain';

const Audits = () => {
  return (
    <Base>
      <SectionMain
        title="Lista de Auditorias"
        buttonText="Voltar para Home"
        buttonHref="/"
      />

      <TableAudits />
    </Base>
  );
};

export default Audits;
