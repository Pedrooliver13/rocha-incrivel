import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

import { PrivateRouteProps } from 'types/routes/privateRoutes';

export const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const token = Cookies.get('token');

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};
