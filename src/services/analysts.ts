import Cookies from 'js-cookie';

import { AnalystsType } from 'types/api/analysts';
import { ToastError } from 'components/Toasts';

export const getAllAnalysts = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/analysts`);
    return response.json();
  } catch (err) {
    throw new Error("Can't get analysts");
  }
};

export const signIn = async (email: string, password: string) => {
  if (!email || !password) {
    ToastError('E-mail e senha são obrigatórios');
    return null;
  }

  try {
    const allAnalysts = await getAllAnalysts();
    const analyst = allAnalysts.find((item: AnalystsType) => {
      return item.email === email.toLowerCase() && item.password === password;
    });

    if (!analyst) {
      ToastError('E-mail ou senha inválidos');
      return;
    }

    Cookies.set(
      'token',
      JSON.stringify({ email, password, roles: analyst.roles })
    );
    return analyst;
  } catch (error) {
    ToastError('Erro ao realizar login');
  }
};
