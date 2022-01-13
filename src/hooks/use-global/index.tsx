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
import { ERoles } from 'routes/PrivateRoute/constants';

export type GlobalContextProps = {
  loggedUserData: AnalystsType | null;
  setLoggedUserData: (data: AnalystsType | null) => void;
  userLogout: () => void;
  hasAllPermission: boolean | null;
};

const GlobalContext = createContext<GlobalContextProps>({
  loggedUserData: null,
  setLoggedUserData: () => {},
  userLogout: () => {},
  hasAllPermission: null
});

const GlobalProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [hasAllPermission, setHasAllPermission] = useState<boolean | null>(
    null
  );
  const [loggedUserData, setLoggedUserData] = useState<AnalystsType | null>(
    null
  );

  const userLogout = useCallback(() => {
    Cookies.remove('token');
    setLoggedUserData(null);
    setHasAllPermission(false);
    ToastSuccess('Deslogado com sucesso');
    navigate('/sign-in');
  }, [navigate]);

  useEffect(() => {
    const token = Cookies.get('token');

    const autoLogin = async () => {
      if (token) {
        const { email, password } = JSON.parse(token);
        const response = await signIn(email, password);
        const hasAllPermission = response?.roles.includes(ERoles.allAcess);

        if (!response) return;

        setLoggedUserData(response);
        setHasAllPermission(hasAllPermission);
      }
    };

    autoLogin();
  }, [userLogout]);

  return (
    <GlobalContext.Provider
      value={{
        loggedUserData,
        setLoggedUserData,
        userLogout,
        hasAllPermission
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext, GlobalProvider, useGlobalContext };
