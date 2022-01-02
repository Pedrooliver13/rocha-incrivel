/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { ToastSuccess } from 'components/Toasts';
import { signIn } from 'services/analysts';
import { AnalystsType } from 'types/Api/analysts';

export type GlobalContextProps = {
  loggedUserData: AnalystsType | null;
  setLoggedUserData: (data: AnalystsType | null) => void;
  userLogout: () => void;
};

const GlobalContext = createContext<GlobalContextProps>({
  loggedUserData: null,
  setLoggedUserData: () => {},
  userLogout: () => {}
});

const GlobalProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [loggedUserData, setLoggedUserData] = useState<AnalystsType | null>(
    null
  );

  const userLogout = useCallback(() => {
    Cookies.remove('token');
    setLoggedUserData(null);
    ToastSuccess('Deslogado com sucesso');
    navigate('/sign-in');
  }, [navigate]);

  useEffect(() => {
    const token = Cookies.get('token');

    const autoLogin = async () => {
      if (token) {
        const { email, password } = JSON.parse(token);
        const response = await signIn(email, password);

        setLoggedUserData(response);
      }
    };

    autoLogin();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ loggedUserData, setLoggedUserData, userLogout }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext, GlobalProvider, useGlobalContext };
