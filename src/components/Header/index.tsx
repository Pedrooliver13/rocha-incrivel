import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogOut } from '@styled-icons/feather/LogOut';
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle';
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight';

import Logo from 'components/Logo';
import { Container } from 'styles/container';
import { useGlobalContext } from 'hooks/use-global';

import { menuItems } from './constants';
import * as S from './styles';

const Header = () => {
  const { userLogout } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <S.Wrapper>
        <div className="content__desktop">
          <Logo />

          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            ))}
          </ul>

          <Link to={'/sign-in'} onClick={userLogout}>
            <LogOut className="icon" width={20} />
            Sair
          </Link>
        </div>

        <div className={(isOpen && 'is-active') + ' content__mobile'}>
          <Logo />

          <div className="button__open" onClick={handleToggle}>
            <MenuAltRight width={35} />
          </div>

          <div className="content__mobile-backdrop" onClick={handleToggle} />

          <div className="content__mobile-menu">
            <header className="content__mobile-menu-header">
              <Logo />
              <CloseCircle
                className="content__mobile-menu-header-close"
                width={35}
                onClick={handleToggle}
              />
            </header>

            <ul className="content__mobile-menu-body">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              ))}
            </ul>

            <footer className="content__mobile-menu-footer">
              <Link to="/sign-in" onClick={userLogout}>
                <LogOut width={20} className="icon" />
                Sair
              </Link>
            </footer>
          </div>
        </div>
      </S.Wrapper>
    </Container>
  );
};

export default Header;
