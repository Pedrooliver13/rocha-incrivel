import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const token = Cookies.get('token');

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};