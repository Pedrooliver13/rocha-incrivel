import { Link } from 'react-router-dom';

import { Container } from 'styles/container';
import { footerItems } from './contants';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <Container>
        <div className="infos">
          {footerItems.map((item, index) => (
            <ul key={index}>
              <li>{item.title}</li>

              {item.childrens?.map((children, index) => (
                <li key={index}>
                  {children.path ? (
                    <Link to={children.path}>{children.label}</Link>
                  ) : (
                    <>{children.label}</>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="copy">
          <p>
            Todos os direitos reservados &copy; <span>Stone, 2022</span>
          </p>
          <p>
            Feito com <span className="copy-heart">❤</span> por Pedro Oliveira
          </p>
        </div>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
